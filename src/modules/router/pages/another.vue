<template>
	<v-page>
		<p class="p1">
			<router-link to="/router/index">跳转到router练习首页</router-link>
		</p>
		<div class="overHeight">超出高度</div>
	</v-page>
</template>
<script>
export default {
	name: 'router_practice_another',
	data() {
		return {

		}
	}
}

</script>
<style lang="scss">
.modules_router_another {
	.p1 {
		font-size: 22px;
		color: #91AC52;
	}
	.overHeight {
		height: 1000px;
	}
}

</style>
