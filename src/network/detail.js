import request from './network.js'
export function detailSwipterdata(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}
export class detailGoods{
	constructor(itemInfo,columns,shopInfos){
		this.lownowPrice = itemInfo.lowNowPrice
		this.highnowPrice = itemInfo.highNowPrice
		this.title = itemInfo.title
		this.desc = itemInfo.desc//简介
		this.discountBgColor = itemInfo.discountBgColor//打折颜色
		this.discountDesc = itemInfo.discountDesc//打折力度
		this.column = columns
		this.shopInfo = shopInfos		
	}
}
export class detailShoppromotions{
	constructor(promotions1,detailInfo1,detailrate1) {
	    this.promotions = promotions1
		this.detailInfo = detailInfo1
		this.detailrate = detailrate1
	}
}
// export class detailGoods {
//   constructor(itemInfo, columns, services) {
//     this.title = itemInfo.title;
//     this.desc = itemInfo.desc;
//     this.newPrice = itemInfo.price;
//     this.oldPrice = itemInfo.oldPrice;
//     this.discount = itemInfo.discountDesc;
//     this.columns = columns;
//     this.services = services;
//     this.nowPrice = itemInfo.highNowPrice;
//   }
// }
// export class detailShop{
// 	detailShopInfo(shop){
// 		this.cfans = shop.cfans
// 		this.cGoods = shop.cGoods
// 		this.cSells = shop.cSells
// 		this.score = shop.scrore
// 		this.shoplogo = shop.shoplogo
// 	}
// }
