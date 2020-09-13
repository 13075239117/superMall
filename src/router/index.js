import Vue from 'vue'
import Router from 'vue-router'
const home = () => import("../views/home/home.vue")
const category = () => import('../views/category/category.vue')
const profile = () => import('../views/profile/profile.vue')
const shop = () => import('../views/shop/shop.vue')
const detail = () => import('../views/detail/detail.vue')
Vue.use(Router)
const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: home
	},
	{
		path: '/category',
		component: category
	},
	{
		path: '/profile',
		component: profile
	},
	{
		path: '/shop',
		component: shop
	},
	{
		path: '/detail/:iid',
		component: detail
	},
]
const router = new Router({
	routes,
	mode: 'history'
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
export default router
