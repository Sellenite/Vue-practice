<template>
	<div id="app">
		<transition :name="$store.state.transitionStore.transitionName">
			<keep-alive>
				<router-view/>
			</keep-alive>
		</transition>
	</div>
</template>
<script>
export default {
	name: 'App'
}

</script>
<style lang="scss">
@import '~@/scss/index.scss';

</style>
