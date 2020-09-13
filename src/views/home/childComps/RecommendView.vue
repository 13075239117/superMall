<template>
	<div class="recommend">
		<div v-for="item in recommend" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'recommendView',
		props:{
			recommend:''
		}
	}
</script>

<style scoped>
	/* .recommend img{
		width: 100%;
	} */
	.recommend{
		display: flex;
		text-align: center;
		border-bottom: 10px solid #EEEEEE;
		padding: 10px 0 20px;
	}
	.recommend-item{
		flex: 1;
		
	}
	.recommend img{
		width: 80%;
		margin-bottom: 5px;
	}
</style>
