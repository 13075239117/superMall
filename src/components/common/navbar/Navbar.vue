<template>
	<div class="navbar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'navbar'
	}
</script>

<style scope>
	.navbar{
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-size: 28px;
		box-shadow: 0 1px 1px rgba(100,100,100,.1);
		color: white; 
		z-index: 999;
	}
	.left , .right{
		width: 60px;
	}
	.center{
		flex: 1;
	}
</style>
