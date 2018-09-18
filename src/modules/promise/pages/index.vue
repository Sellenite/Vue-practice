<template>
	<v-page :className="'page-promise'">
		<p @click="asyncPrint">test async</p>
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
