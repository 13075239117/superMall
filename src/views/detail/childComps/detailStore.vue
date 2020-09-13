<template>
	<div>
		<div class="shopDescriped">
			<div class="shoplogo"><img :src="shopinfo.shopLogo" alt=""></div>
			<div class="shopname"><span>{{shopinfo.name}}</span></div>		
		</div>
		<div id="shopIN">
			<div class="shopattraction">
				<span>{{shopinfo.cFans}}</span>
				<span>总销量</span>
			</div>
			<div class="variety">
				<span>{{shopinfo.cGoods}}</span>
				<span>全部宝贝</span>
			</div>
			<div class="quality">
				<div v-for="item in shopinfo.score" >
					<span>{{item.name}}</span>
					<span>{{item.score}}</span>
					<span v-if="item.isBetter">高</span>
					<span v-else>低</span>
				</div>
			</div>
			<div class="shopspan">
				<span><a :href="shopinfo.shopUrl">进入商店</a></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'detailStore',
		props: {
			shopinfo: {
				type: Object,
				default () {
					return {}
				}
			},
		}
	}
</script>

<style scoped>
	.shopDescriped{
		height: 60px;
	}
	#shopIN{
		height: 100px;
		margin-bottom: 30px;
		border-bottom: 1px solid red;
	}
	.shoplogo {
		width: 60px;
		height: 60px;
		float: left;
	}

	.shoplogo img {
		width: 100%;
	}

	.shopDescriped .shopname {
		float: left;
		margin: 20px 20px 0
	}
	.shopattraction span{
		/* display: block; */
		display: block;
	}
	.variety span{
		display: block;
	}
	.variety{
		float: left;
		padding-right: 50px;
		border-right: 1px solid black;
	}
	.shopattraction{
		float: left;
		margin-right: 30px;
	}
	.quality{
		height:60px;
		/* float:left; */
		display: inline-block;
		margin-left: 30px;
	}
	.shopspan{
		margin: auto;
		width: 80px;
		height: 20px;
		/* float: inline-end; */
		margin: 0 auto;
		background-color: red;
		display: block;
		/* border: 1px solid red; */
	}
</style>
