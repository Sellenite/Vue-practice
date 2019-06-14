<template>
	<v-page :className="'page-main'">
		<v-title v-model="isShow"></v-title>
		<p v-for="(item, index) in list" @click="handleClick(index)" :class="{active: ind === index}">{{item.title}}</p>
		<p class="flag" v-if="this.flag">{{this.flagText}}</p>
		<p @click="add(233, $event)">点击监听num：{{numObj.num}}</p>
		<!-- 测试全局组件插件 -->
		<p @click="showConfirm">点击显示confirm框</p>
		<div style="height:20px"></div>
		<v-menu :menu="menu"></v-menu>
	</v-page>
</template>
<script>
import vTitle from '@ce/vTitle';
import vMenu from '@ce/menu';

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
			ind: 0,
			menu: [
				{
					label: '测试1',
					value: 'test1',
					level: 1,
					children: [
						{
							label: '测试1-1',
							value: 'test1-1',
							level: 2,
							children: [
								{
									label: '测试1-1-1',
									value: 'test1-1-1',
									level: 3,
									children: []
								}
							]
						},
						{
							label: '测试1-2',
							value: 'test1-2',
							level: 2,
							children: []
						}
					]
				},
				{
					label: '测试2',
					value: 'test2',
					level: 1,
					children: []
				}
			]
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
		showConfirm() {
			this.$confirm({
				title: '修改的标题',
				content: '修改的内容'
			}).then((res) => {
				console.log('confirm');
			});
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
		}
	},
	components: {
		vTitle,
		vMenu
	}
}

</script>
<style lang="css" scoped>
.active {
	color: red
}

</style>
