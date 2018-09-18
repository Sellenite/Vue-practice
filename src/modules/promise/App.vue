<template>
	<div class="app-view">
		<transition :name="$store.state.transitionStore.transitionName">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
export default {
	name: 'modules_promise'
}
</script>
