<template>
	<div class="goodListitem" @click="itemClick">	
			<img :src="goodListitem.show.img" alt="" @load="imgLoad">
			<div class="text">
				<p>{{goodListitem.title}}</p>
				<span class="price">{{goodListitem.price}}</span>
				<span class="collect">{{goodListitem.cfav}}</span>
			</div>
	</div>
</template>

<script>
	export default{
		name:'goodListitem',
		props:{
			goodListitem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imgLoad(){
				// console.log('图片加载完成')
				this.$bus.$emit('loadFinish')
			},
			itemClick(){
				this.$router.push('/detail/' + this.goodListitem.iid)
			}
		}
	}
</script>

<style scoped>
	.goodListitem{
		position: relative;
		width: 48%;
		padding: 8px 0px;
	}
	.goodListitem img{
		width: 100%;
	}
	.text p{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	/* .text {
		position: relative;
	} */
	.text .price{
		/* position: position; */
		margin-right: 20px;
	}
	.text .collect{
		position: relative;
	}
	.text .collect::before{
		position: absolute;
		content: ''; 
		left: -15px;
		top: 1px;
		width: 14px;
		height: 14px;
		background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px ;
	}
</style>
 