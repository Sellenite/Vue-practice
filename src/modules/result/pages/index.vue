<template>
	<v-page :className="'page-result'">
		<div>result page</div>
		<x-input v-model="inputValue"></x-input>
		<div class="line">
			<v-single-chooser :selections="periodSingleList" @on-change="handleChooseSingle"></v-single-chooser>
		</div>
		<div class="line">
			<v-multi-chooser :selections="periodMultiList" @on-change="handleChooseMulti"></v-multi-chooser>
		</div>
		<div class="line">
			<v-select :selections="selectList" @on-change="handleSelect"></v-select>
		</div>
	</v-page>
</template>
<script>
import xInput from '../components/xInput';
import vSingleChooser from '../components/vSingleChooser';
import vMultiChooser from '../components/vMultiChooser';
import vSelect from '../components/vSelect';
export default {
	name: 'result_index',
	components: {
		xInput,
		vSingleChooser,
		vMultiChooser,
		vSelect
	},
	data() {
		return {
			inputValue: 'test',
			periodSingleList: [{
					label: '半年',
					value: 0
				},
				{
					label: '一年',
					value: 1
				},
				{
					label: '十年',
					value: 10
				}
			],
			periodMultiList: [{
					label: '客户版',
					value: 0
				},
				{
					label: '代理商版',
					value: 10
				},
				{
					label: '体验版',
					value: 20
				}
			],
			selectList: [{
					label: '入门版',
					value: 0
				},
				{
					label: '中级版',
					value: 1
				},
				{
					label: '高级版',
					value: 2
				}
			]
		}
	},
	watch: {
		/* 双向绑定过滤非数字判断 */
		inputValue(nval, oval) {
			let string = nval + '';
			let regex = /\D/g;
			this.$nextTick(() => {
				this.inputValue = string.replace(regex, '');
			});
		}
	},
	methods: {
		handleChooseSingle(el) {
			console.log(el);
		},
		handleChooseMulti(el) {
			console.log(el);
		},
		handleSelect(el) {
			console.log(el);
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
