<template>
<div :class="`pages ${$route.name}`">
	<v-title v-model="isShow"></v-title>
	<p v-for="(item, index) in list" @click="handleClick(index)" :class="{active: ind === index}">{{item.title}}</p>
	<p @click="add">点击监听num：{{numObj.num}}</p>
</div>
</template>

<script>
import Title from '@/components/title';
export default {
	name: 'index',
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
			ind: 0
		}
	},
	methods: {
		handleClick(index) {
			this.ind = index
		},
		add() {
			this.numObj.num++
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
		'v-title': Title
	}
}
</script>

<style lang="css" scoped>
    .active {
        color: red
    }
</style>
