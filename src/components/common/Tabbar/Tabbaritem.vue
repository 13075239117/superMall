<template>
	<div class="tabbar-item" @click="tabbaritem">
		<div v-if="ok"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon1"></slot></div>
		<div :style="active"><slot name="item-text"></slot></div>
		
	</div>
</template>

<script>
	export default {
		name: 'Tabbaritem',
		props:{
			path:'',
			activeColor:{
				type:String,
				default:'skyblue'
			}
		},
		
		data(){
			return {
				// ok:true
			}
		},
		computed:{
			ok(){
				return this.$route.path.indexOf(this.path)
			},
			active(){
				return !this.ok?{color:this.activeColor}:''
			}
		},
		methods:{
			tabbaritem(){
				// console.log(this.path)
				this.$router.push(this.path)
				// console.log(this.$route)
				// this.ok=!this.ok
				// console.log(this.ok)
			},
			
		},
	
	}
</script>

<style scoped>
	.tabbar-item {
		flex: 1;
		text-align: center;
		/* line-height: 49px; */
		cursor: pointer;
	}

	.tabbar-item img {
		width: 25%;
		height: 20px;
		margin-top: 3px;
		vertical-align: middle;
	}
</style>
