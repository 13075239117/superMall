<template>
	<div class="tapcontrol">
		<div class="tapControl-item" v-for="(item,index) in titles">
			<span @click="selected(index)" :class="{active:currentindex==index}">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'tapControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {currentindex:0}
		},
		methods:{
			selected(a){
				this.currentindex=a
				this.$emit('tapClick',this.currentindex)
			}
		}
	}
</script>

<style scoped>
	.tapcontrol{
		display: flex;
	}
	.tapControl-item{
		flex: 1;
		text-align: center;
		font-size: 20px;
		height: 30px;
		line-height: 30px;
	}
	.active{
		color: red;
		border-bottom: 3px solid red;
		padding-bottom: 5px;
		/* border-width: 15px; */
	}
	/* .tapControl-item span{
		width: 50px;
		
	} */
</style>
