<template>
	<div class="showtheworld">
		<div><span>{{pictureshow[0].key}}</span></div>
		<div v-for="(item,index) in pictureshow[0].list"><img :src="item" alt=""></div>
	</div>
</template>

<script>
	export default{
		name:'pictureshow',
		props: {
			pictureshow: {
				type: Array,
				default () {
					return []
				}
			},
		},
	}
</script>

<style scoped>
	.showtheworld{
		padding-bottom: 50px;
		border-bottom: 1px solid red;
	}
	.showtheworld img{
		width: 100%;
	}
</style>
