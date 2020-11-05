<template>
	<div>
		<!-- <h2 style="font-size: 60px;">类别</h2> -->
		<div class="wrapper">
			
		</div>
	</div>
</template>

<script>
	import BTscroll from 'better-scroll'
	export default {
		name: 'category',
		data() {
			return {
				scroll: ""
			}
		},
		mounted() {
			// new BTscroll(document.querySelector('.wrapper'))
			// console.log()
		}
	}
</script>

<style scoped>
	.wrapper {
		/* height: 200px; */
		/* background-color: red; */
		/* overflow: scroll; */
		/* overflow: hidden; */
	}
</style>