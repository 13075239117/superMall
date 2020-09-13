<template>
	<div class="introduce">
		<div>{{introduce}}</div>
		<div><span>{{lowprice}}</span> <span>{{highprice}}</span></div>
		<div><span v-for="item in sell">{{item}}</span></div>	
		<div><span v-for="item in sevices">{{item.name}}</span></div>
	</div>
</template>

<script>
	export default{
		name:'detailIntroduce',
		props:{
			introduce:{
				type:String,
				default(){
					return ''
				}
			},
			lowprice:{
				type:String,
				default(){
					return ''
				}
			},
			highprice:{
				type:String,
				default(){
					return ''
				}
			},
			sell:{
				type:Array,
				default(){
					return []
				}
			},
			sevices:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			detailGoods(){
				
			}
		}
	}
</script>

<style scoped>
	.introduce{
		padding-bottom: 10px;
		border-bottom:0.0625rem solid red;
	}
</style>
