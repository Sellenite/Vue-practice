<template>
	<div class="router-view">
		<div class="pages" :class="[moduleName, className]">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'vPage',
	props: {
		className: {
			type: String,
			default: 'vPage'
		}
	},
	data() {
		return {
			moduleName: this.$route.name
		}
	}
}

</script>
<style lang="scss">


</style>
