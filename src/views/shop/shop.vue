<template>
	<div>
		<h2 style="font-size: 60px">购物</h2>
		<div class="a">
			<h3>{{$store.state.shopList}}</h3>			
		</div>
	</div>

</template>
<script>
	export default {
		name: 'shop'
	}
</script>

<style scoped>
	.a{
		/* width: 100%;
		height: 500px; */
	}
</style>