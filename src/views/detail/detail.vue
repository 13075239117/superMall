<template>
  <div class="detail">
    <detailNavBar
      :titles="detailTitle"
      class="title"
      ref="Fuckingtitle"
      @fuckingPosition="Fuck"
    ></detailNavBar>
    <backTop
      ref="backtop"
      v-show="Showbacktop"
      @click.native="backTopshow"
    ></backTop>
    <scroll
      class="detailscroll"
      @scroll="getposition"
      :probeType="3"
      ref="backTop123"
    >
      <DetailSwiper ref="swiper" :DSimage="detailImage"></DetailSwiper>
      <detailIntroduce
        ref="introduce"
        :introduce="Goodsintroduce.title"
        :lowprice="Goodsintroduce.lownowPrice"
        :highprice="Goodsintroduce.highnowPrice"
        :sell="Goodsintroduce.column"
        :sevices="Goodsintroduce.shopInfo.services"
      >
      </detailIntroduce>
      <detailStore
        ref="store"
        :shopinfo="Goodsintroduce.shopInfo"
      ></detailStore>
      <detailpromotions
        ref="promotions"
        :promotions="Goodspromotions.promotions.list"
      ></detailpromotions>
      <detailshow
        ref="show"
        :pictureshow="Goodspromotions.detailInfo.detailImage"
      ></detailshow>
      <detailsize ref="size" :size="Goodsize"></detailsize>
      <detailrate ref="rate" :rate="Goodspromotions.detailrate"></detailrate>
	  <!-- <div>{{$store.state.shopList}}</div> -->
    </scroll>
    <detailbottomNav
      :bottomName="bottomFuck"
      @sentShops="setShops"
    ></detailbottomNav>
  </div>
</template>
<script>
import { debounce, formatDate } from "../../common/utils.js";
import {
  detailSwipterdata,
  detailGoods,
  detailShop,
  detailShoppromotions
} from "../../network/detail.js";

import detailbottomNav from "./childComps/detailbottomNav.vue";
import detailrate from "./childComps/detailrate.vue";
import detailsize from "./childComps/detailsize.vue";
import detailshow from "./childComps/detailshow.vue";
import detailpromotions from "./childComps/detailpromotions.vue";
import detailStore from "./childComps/detailStore.vue";
import detailIntroduce from "./childComps/detailIntroduce.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import detailNavBar from "./childComps/detailNavBar.vue";
import backTop from "../../components/content/topback/topback.vue";
import scroll from "../../components/common/scroll/scroll.vue";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      detailTitle: ["商品", "参数", "评论", "推荐"],
      detailImage: [],
      Goodsintroduce: {},
      Goodspromotions: {},
      goodPrice: [],
      Goodsize: {},
      Showbacktop: false,
      offsettops: "",
      bottomFuck: [
        { a: "客服", b: require("./客服.png") },
        { a: "店铺", b: require("./店铺.png") },
        { a: "收藏", b: require("./收藏.png") }
        // {a:'客服',b:'img/detail/客服.png'},
        // {a:'店铺',b:'img/detail/店铺.png'},
        // {a:'收藏',b:'img/detail/收藏.png'},
      ]
    };
  },
  components: {
    backTop,
    scroll,
    detailNavBar,
    DetailSwiper,
    detailIntroduce,
    detailStore,
    detailpromotions,
    detailshow,
    detailsize,
    detailrate,
    detailbottomNav
  },
  methods: {
    getposition(position) {
      // console.log(position.y)
      // console.log(-position.y>this.offsettops[this.offsettops.length-1])
      this.Showbacktop = -position.y > 1000 ? true : false;
      for (let k = 0; k < this.offsettops.length; k++) {
        // console.log(-position.y>this.offsettops[k])
        // console.log(-position.y>this.offsettops[k] && -position.y<this.offsettops[k+1])
        if (
          -position.y > this.offsettops[k] &&
          -position.y < this.offsettops[k + 1]
        ) {
          this.$refs.Fuckingtitle.currentindex = k;
          // console.log(k)
        } else if (-position.y > this.offsettops[this.offsettops.length - 1]) {
          // console.log(12)
          this.$refs.Fuckingtitle.currentindex = this.offsettops.length - 1;
        }
      }
    },

    backTopshow() {
      // console.log(123)
      // console.log(this.$bus.$on('imgsfinish'),() =>{
      // 	console.log(212)
      // })
      this.$refs.backTop123.scrollTo(0, 0);
      // console.log(this.$refs.backTop123.refresh)
    },
    getoffsetTop() {
      this.offsettops = [];
      this.offsettops.push(
        this.$refs.swiper.$el.offsetTop,
        // this.$refs.show.$el.offsetTop,
        this.$refs.size.$el.offsetTop,
        this.$refs.rate.$el.offsetTop
      );
      // console.log(this.offsettops)
      // this.$refs.Fuckingtitle.currentindex = 1
    },
    Fuck(currentindex) {
      // console.log(currentindex)
      // console.log(this.offsettops[currentindex])
      this.$refs.backTop123.scrollTo(0, -this.offsettops[currentindex]);
    },
    setShops() {
      let a = {
        desc: this.Goodsintroduce.desc,
        price: this.Goodsintroduce.lownowPrice,
        shopImgurl: this.detailImage[0],
        iid:this.iid
      };
      this.$store.dispatch("addShops", a);
    }
  },

  created() {
    this.iid = this.$route.params.iid;
    detailSwipterdata(this.iid).then(res => {
      console.log(res);
      const obj = res.result;
      // console.log(new detailGoods(obj.itemInfo,obj.coloum,obj.shopInfos))
      this.detailImage = res.result.itemInfo.topImages;
      this.Goodsintroduce = new detailGoods(
        obj.itemInfo,
        obj.columns,
        obj.shopInfo
      );
      // console.log(this.Goodsintroduce.title)
      this.Goodsintroduce.column[2] = "72小时发货";
      this.Goodsintroduce.shopInfo.services.pop();
      this.Goodspromotions = new detailShoppromotions(
        obj.promotions,
        obj.detailInfo,
        obj.rate
      );
      // console.log(this.Goodspromotions.skuInfo.skus)
      this.Goodsize = obj.itemParams;
      // this.Goodsrate = obj.
      // console.log(this.Goodsize.rule)
      // console.log(this.$refs.backTop123)
    });
  },
  mounted() {
    // console.log(this.$refs.backTop123.refresh)
    // 	const refresh1 = debounce(this.$refs.backTop123.refresh,50)
    // 	this.$bus.$on('imgsfinish',() =>{
    // 		refresh1()
    // 	})
    // 	console.log(this.$bus.$on('imgsfinish',() =>{
    // 		refresh1()
    // 	}))
  },
  updated() {
    this.getoffsetTop();
  }
  // methods:{
  // 	getDetail(){
  // 		this.Goodsintroduce = new detailGoods()
  // 	}
  // }
  // destroyed() {
  // 	console.log(this.iid)
  // }
};
</script>

<style scoped>
.detail {
  /* height: 100vh;
		position: relative; */
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.detailscroll {
  /* height: 90vh; */
  /* margin-bottom: 49px; */
  /*   */
  /* overflow: hidden; */
  /* height: calc(100%-44px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
