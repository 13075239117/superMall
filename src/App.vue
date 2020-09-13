<template>
  <div id="app">
	  <keep-alive exclude="detail">
		  <router-view></router-view>
	  </keep-alive>
	  <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/mainTarbar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
	@import url("./assets/css/base.css");
</style>
