<template>	
		<NavBar>
			<div slot='left' @click="backTo">
				<img src="../../../assets/img/common/back.svg" alt="">
			</div>
			<div slot='center' class="title">				
				<div 
				v-for="(item,index) in titles" 
				id="titleItem" 
				:class="{titleItem:currentindex==index}" 
				@click="selected(index)">
				{{item}}
				</div>				
			</div>
		</NavBar>	
</template>

<script>
	import NavBar from '../../../components/common/navbar/Navbar.vue'
	export default{
		name:'detailNavBar',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentindex:0
			}
		},
		components:{
			NavBar
		},
		methods:{
			selected(index){
				// console.log(index)
				this.currentindex=index
			},
			backTo(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.title{
		display: flex;
		color: gray;
	}
	/* .title img{
		position: relative;
		left: -5px;
	} */
	#titleItem{
		flex: 1;
		font-size: 20px;
	}
	.titleItem{
		color: red;
	}
</style>
