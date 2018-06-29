<template>
	<v-page>
		<p class="p1">
			<div>
				<router-link to="/router/another">跳转到another</router-link>
				<br>
				<router-link to="/router/params/sadsad">跳转到params</router-link>
				<br>
				<router-link to="/router/query?userid=yuuhei">跳转到query</router-link>
				<br>
				<router-link :to="{path: '/router/query', query: {userid: 'yuuhei'}}">跳转到query to中定义</router-link>
				<br>
				<button @click="click1">跳转到another</button>
				<br>
				<button @click="click2">跳转到another path</button>
				<br>
				<button @click="click3">跳转到another name</button>
				<br>
				<button @click="click4">跳转到params</button>
				<br>
				<button @click="click5">跳转到query</button>
			</div>
		</p>
	</v-page>
</template>
<script>
export default {
	name: 'router_practice_index',
	data() {
		return {

		}
	},
	methods: {
		click1() {
			this.$router.push('/router/another');
		},
		click2() {
			this.$router.push({path: '/router/another'});
		},
		click3() {
			this.$router.push({name: 'modules_router_another'});
		},
		click4() {
			// params需要对应router定义时的params
			this.$router.push({name: 'modules_router_params', params: {userid: 'yuuhei'}});
		},
		click5() {
			this.$router.push({path: '/router/query', query: {userid: 'yuuhei'}});
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
	a {
		font-size: 18px;
		color: #0CC93DFF;
	}
}

</style>
