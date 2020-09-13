<template>
	<div>
		<div class="promotions">
			<span v-for="item in promotions">【{{item}}】</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'promotions',
		props: {
			promotions: {
				type: Array,
				default () {
					return []
				}
			},
		},
	}
</script>

<style scoped>
	.promotions {
		margin-bottom: 100px;
	}
</style>
