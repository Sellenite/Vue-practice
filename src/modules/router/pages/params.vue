<template>
	<v-page>
		<p class="p1">
			<router-link to="/router/index">跳转到router练习首页</router-link>
		</p>
		<p>
			当前路由的params是：{{$route.params.userid}}
		</p>
	</v-page>
</template>
<script>
export default {
	name: 'router_practice_query',
	data() {
		return {

		}
	}
}

</script>
<style lang="scss">
.modules_router_query {
	.p1 {
		font-size: 22px;
		color: #91AC52;
	}
}

</style>
