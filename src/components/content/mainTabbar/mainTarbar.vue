<template>
	<tabbar>
		<tabbaritem path='/home' activeColor="red">
			<img slot='item-icon' src="../../../assets/img/tabbar/首页.svg" alt="" >
			<img slot='item-icon1' src="../../../assets/img/tabbar/首页(1).svg" alt="">
			<div slot='item-text' >首页</div>
		</tabbaritem>
		<tabbaritem path='/category'>
			<img slot='item-icon' src="../../../assets/img/tabbar/分类.svg" alt="">
			<img slot='item-icon1' src="../../../assets/img/tabbar/分类(1).svg" alt="">
			<div slot='item-text'>分类</div>
		</tabbaritem>
		<tabbaritem path='/shop'>
			<img slot='item-icon' src="../../../assets/img/tabbar/购物.svg" alt="">
			<img slot='item-icon1' src="../../../assets/img/tabbar/购物(1).svg" alt="">
			<div slot='item-text'>购物</div>
		</tabbaritem>
		<tabbaritem path='/profile'> 
			<img slot='item-icon' src="../../../assets/img/tabbar/我的.svg" alt="">
			<img slot='item-icon1' src="../../../assets/img/tabbar/我的(1).svg" alt="">
			<div slot='item-text'>我的</div>
		</tabbaritem>
	</tabbar>
	<!-- <router-link></router-link> -->
</template>

<script>
	import tabbar from '../../common/Tabbar/Tabbar.vue'
	import tabbaritem from '../../common/Tabbar/Tabbaritem.vue'
	export default{
		name:'mainTarbar',
		components: {
			tabbar,
			tabbaritem
		}
	}
</script>

<style scoped>
</style>
