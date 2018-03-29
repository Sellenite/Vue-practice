<template>
	<v-page className="page_not_fount">
		<div class="test">{{this.message}}</div>
	</v-page>
</template>
<script>
export default {
	name: 'notFound',
	data() {
		return {
			message: '404 NOT FOUND'
		}
	}
}

</script>
<style lang="scss">
.page_not_fount {
	font-size: 30px;
	color: orange;
}

</style>
