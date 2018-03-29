<template>
	<div class="router-view">
		<div class="pages" :class="className">
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
	}
}

</script>
<style lang="scss">


</style>
