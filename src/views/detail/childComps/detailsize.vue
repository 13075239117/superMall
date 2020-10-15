<template>
	<div>
		<div>{{size.rule.key}}</div>
		<div class="cde" v-for="item in size.rule.tables[0]">
			<table>
				<tr>
					<td v-for="item1 in item">{{item1}}</td>
				</tr>
			</table>
		</div>
		<div class="abc">
			<div v-for="item in size.info.set">
				<table>
					<tr>
						<td>{{item.key}}</td>
						<td>{{item.value}}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'size',
		props:{
			size:Object,
			default(){
				return {}
			}
		},
		created() {
			console.log(this.size)
		}
	}
</script>

<style scoped>
	.cde{
		margin-bottom: 5px;
		border-bottom: 1px solid red;
	}
	.abc{
		margin-bottom: 5px;
		border-bottom: 1px solid red;
	}
</style>
