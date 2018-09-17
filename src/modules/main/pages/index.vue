<template>
	<v-page :className="'page-main'">
		<v-title v-model="isShow"></v-title>
		<p v-for="(item, index) in list" @click="handleClick(index)" :class="{active: ind === index}">{{item.title}}</p>
		<p class="flag" v-if="this.flag">{{this.flagText}}</p>
		<p @click="add(233, $event)">点击监听num：{{numObj.num}}</p>
		<p @click="asyncPrint">test async</p>
	</v-page>
</template>
<script>
import vTitle from '@ce/vTitle';
export default {
	name: 'main_entry',
	data() {
		return {
			list: [{
					title: 'AAA'
				},
				{
					title: 'BBB'
				},
				{
					title: 'CCC'
				}
			],
			isShow: true,
			numObj: {
				num: 0,
				test: 123
			},
			flag: true,
			flagText: '测试flag',
			ind: 0
		}
	},
	methods: {
		handleClick(index) {
			this.ind = index
		},
		add(num, event) {
			console.log(num, event);
			this.numObj.num++;
		},
		timeout(ms) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					let time = +new Date();
					if (time % 2 === 0) {
						resolve('success');
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
			arr = arr.map((sec) => {
				return this.timeout(sec);
			});
			try {
				let results = await Promise.all(arr);
				console.log(results);
			} catch (err) {
				console.log(err);
			}
		}
	},
	computed: {
		// 利用computed返回对象中的一个属性，改变改对象下的属性就能在watch里监听
		computedNum() {
			return this.numObj.num
		}
	},
	watch: {
		/* 监听某个对象属性的写法，必须使用handler和deep */
		numObj: {
			handler(nval, oval) {
				/* 注意：在变异 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变异之前值的副本。 */
				console.log(nval.num === oval.num); // true
			},
			deep: true
		},
		/* 效果与使用computed做中间层一样，有newValue和oldValue */
		'numObj.num': function(nval, oval) {
			console.log(nval, oval)
		},
		/* 这样监听对象里的属性就可以拿到newValue和oldValue */
		computedNum(nval, oval) {
			console.log(nval, oval);
		},
	},
	components: {
		vTitle
	}
}

</script>
<style lang="css" scoped>
.active {
	color: red
}

</style>
