<template>
	<v-page :className="'page-promise'">
		<p @click="asyncPrint">test async</p>
		<p @click="testPromiseAll">test promise.all</p>
		<p @click="testPromiseAllCatchError">test promise.all catch error</p>
	</v-page>
</template>
<script>
export default {
	name: 'promise_index',
	methods: {
		timeout(ms) {
			const randomNum = (from, to) => {
				return parseInt(from + Math.random() * (to - from + 1));
			};
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					let num = randomNum(1, 100);
					if (num % 2 === 0) {
						resolve(num);
					} else {
						reject('timeout');
					}
				}, ms);
			});
		},
		async asyncPrint() {
			// await后面的Promise依然可以用catch来捕获reject的内容，不过最好用try-catch
			// 因为仍然要对不同的情况进行不同的逻辑
			// async/await/promise.all用法
			let arr = [200, 300, 1000];
			arr = arr.map((ms) => {
				return this.timeout(ms);
			});
			try {
				let results = await Promise.all(arr);
				console.log(results);
			} catch (err) {
				console.log(err);
			}
		},
		promiseResove(sec) {
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					resolve({
						resolveAfterSeconds: sec
					})
				}, sec * 1000);
			});
		},
		promiseReject(sec) {
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					reject({
						rejectAfterSeconds: sec
					})
				}, sec * 1000);
			});
		},
		testPromiseAll() {
			// 不要直接使用new Array(3)的结果进行map操作，其实是错误的，硬是要使用可以使用下方法：
			// let promiseArray = new Array(3).join('.').split('.').map，
			// let promiseArray = Array.apply(null, new Array(3)).map，
			// 这样创造出来的数组才能够使用map遍历
			let promiseArray = Array.apply(null, new Array(3));
			promiseArray = promiseArray.map((item, index) => {
				// 小数计算有精度问题，如需要精确精度，需要处理
				if (index === 1) {
					return this.promiseReject(index + 1);
				} else {
					return this.promiseResove(index + 1);
				}
			})
			var handlePromise = Promise.all(promiseArray);
			// 只要有一个是reject，就会触发catch，不会触发then
			handlePromise.then(res => {
				// Promise.all返回的then过来的是一个数组
				console.log('all promise are resolved', res);
			}).catch(err => {
				console.log('promise reject failed reason', err);
			});
		},
		testPromiseAllCatchError() {
			let promiseArray = Array.apply(null, new Array(3));
			promiseArray = promiseArray.map((item, index) => {
				let promiseItem;
				if (index === 1) {
					promiseItem = this.promiseReject(index + 1);
				} else {
					promiseItem = this.promiseResove(index + 1);
				}
				// 里面里面的promise返回带catch时，只会执行在Promise.all中的then的代码，不会执行其catch
				return promiseItem.catch(err => {
					// 不返回则resolve时返回undefined
					return err
				});
			})
			var handlePromise = Promise.all(promiseArray);
			// 以上会造成成功错误都会在then中捕获，这样失败的结果也可以当做成功处理，可以针对不同的值进行处理
			handlePromise.then(res => {
				console.log('all promise are resolved', res);
			}).catch(err => {
				// some coding error in handling happened，不会捕获reject的内容
				console.log('promise reject failed reason', err);
			});
		}
	}
}

</script>
<style lang="scss">
.pages.page-result {
	.line {
		margin-top: 30px;
	}
}

</style>
