<template>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<slot></slot>
			</div>
		</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'scroll',
		data() {
			return {
				scroll: ''
			}
		},
		props:{
			probeType:{
				type:Number,
				default(){
					return 0
				}
			},
			pullUpLoad:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper, {
				pullUpLoad: this.pullUpLoad,
				probeType:this.probeType,
				click: true
			})
			// console.log(1)

			this.scroll.on('scroll',(position) =>{
				this.$emit('scroll',position)
				// console.log(position)
			})
			this.scroll.on('pullingUp',() => {
				this.$emit('loadMore')
			})
			// console.log(BScroll)
		},
		methods:{
			scrollTo(x,y,time=1000){
				this.scroll&&this.scroll.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.scroll&&this.scroll.finishPullUp()
			},
			refresh(){
				// console.log('图片加载完成')
				this.scroll&&this.scroll.refresh()
			}
		}
	}
</script>

<style scoped>

</style>

<!-- <template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
        message: '哈哈哈'
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })

      // 3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
 -->
