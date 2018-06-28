<template>
	<v-page>
		<p class="p1">
			当前路由参数：{{$route.params.userid}}
		</p>
	</v-page>
</template>
<script>
export default {
	name: 'router_practice',
	data() {
		return {

		}
	}
}

</script>
<style lang="scss">
.modules_router_index {
	.p1 {
		font-size: 22px;
		color: #3D50C1;
	}
}

</style>
