<template>
<v-page>
	<div>result page</div>
	<x-input v-model="test"></x-input>
</v-page>
</template>

<script>
import xInput from '../components/xInput';
export default {
	name: 'result_index',
	components: {
		xInput
	},
	data() {
		return {
			test: '123'
		}
	},
	watch: {
		/* 双向绑定过滤非数字判断 */
		test(nval, oval) {
			let num = +nval;
			let type = Object.prototype.toString.call(num);
			if(!isNaN(num) && type === '[object Number]') {
				this.$nextTick(() => {
					this.test = nval
				})
			} else {
				this.$nextTick(() => {
					this.test = oval
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
