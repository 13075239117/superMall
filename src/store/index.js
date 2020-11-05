//导入创建实例
import Vue from 'vue'
import Vuex from 'vuex'
// const Vuex = require('Vuex')
console.log(Vuex);
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        shopList: []
    },
    mutations: {
        addShopCounters(state,details){
            details.count += 1
            console.log('old' + ':' + details.count);
        },
        addShops(state,details){
            details.count = 1
            state.shopList.push(details)
            console.log('new' + ':' + details.count)
        }
    },
    actions: {
        addShops(content,details){
            let oldproduct = null
            for (let item in content.state.shopList) {
                oldproduct = content.state.shopList[item].iid !== details.iid ? null : content.state.shopList[item]
                // console.log(oldproduct)
            }
            if (oldproduct) {
                content.commit('addShopCounters',oldproduct)
            }
            else {
                content.commit('addShops',details)
            }
        }
    },
    getters: {},
    modules: {}
})
//导出
export default store