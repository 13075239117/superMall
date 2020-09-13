<template>
	<div id="tabbar">
		<slot></slot>
	</div>
	<!-- <router-view /> -->

</template>

<script>
	export default {
		name: 'Tabbar'
	}
</script>
	
<style scoped>
	#tabbar {
		display: flex;
		height: 49px;
		background-color: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
		
	}
		/* @import url("assets/css/base.css"); */
</style>
