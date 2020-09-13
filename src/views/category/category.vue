<template>
	<div>
		<!-- <h2 style="font-size: 60px;">类别</h2> -->
		<div class="wrapper">
			<ul class="content">
				<li>ok1</li>
				<li>ok2</li>
				<li>ok3</li>
				<li>ok4</li>
				<li>ok5</li>
				<li>ok6</li>
				<li>ok7</li>
				<li>ok8</li>
				<li>ok9</li>
				<li>ok10</li>
				<li>ok11</li>
				<li>ok12</li>
				<li>ok13</li>
				<li>ok14</li>
				<li>ok15</li>
				<li>ok16</li>
				<li>ok17</li>
				<li>ok18</li>
				<li>ok19</li>
				<li>ok20</li>
				<li>ok21</li>
				<li>ok22</li>
				<li>ok23</li>
				<li>ok24</li>
				<li>ok25</li>
				<li>ok26</li>
				<li>ok27</li>
				<li>ok28</li>
				<li>ok29</li>
				<li>ok30</li>
				<li>ok31</li>
				<li>ok32</li>
				<li>ok33</li>
				<li>ok34</li>
				<li>ok35</li>
				<li>ok36</li>
				<li>ok37</li>
				<li>ok38</li>
				<li>ok39</li>
				<li>ok40</li>
				<li>ok41</li>
				<li>ok42</li>
				<li>ok43</li>
				<li>ok44</li>
				<li>ok45</li>
				<li>ok46</li>
				<li>ok47</li>
				<li>ok48</li>
				<li>ok49</li>
				<li>ok50</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BTscroll from 'better-scroll'
	export default{
		name:'category',
		data(){
			return {
				scroll:""
			}
		},
		mounted() {  
			new BTscroll(document.querySelector('.wrapper'))
			// console.log()
		}
	}
</script>

<style scoped>
	.wrapper{
		height: 200px;
		background-color: red;
		/* overflow: scroll; */
		/* overflow: hidden; */
	}
</style>
