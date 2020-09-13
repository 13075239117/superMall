<template>
	<div class="topback">
		<img src="../../../assets/img/common/top.png" alt="">
	</div>
</template>

<script>
	export default{
		name:'topback'
	}
</script>

<style scoped>
	.topback{
		position: fixed;
		width: 43px;
		height: 43px;
		bottom: 60px;
		right: 20px;
		
	}
	.topback img{
		width: 100%;
		z-index:999;
	}
</style>
