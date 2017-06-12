// 引入vue
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入组件
import Home from '../pages/home'
import City from '../components/header/city'
import Choose from '../components/header/choose'
import Search from '../components/header/search'

import Food from '../pages/food/food'
import Life from '../pages/life/life'
import Play from '../pages/play/play'
import Spa from '../pages/spa/spa'

import PlayDetail from '../pages/play/PlayDetail'
import Topic from '../components/themeDetail'
import Host from '../components/shopDetail'

import Shop from '../components/header/shop'
import Product from '../components/header/product'
import Order from '../components/order/order'



// 定义路由
const routes = [
	{path: '', component: Home, children: [
		{path: '',component: Food},
		{path: 'food',component: Food},
		{path: 'life',component: Life},
		{path: 'play',component: Play},
		{path: 'spa',component: Spa},
	]},		
	{path: '/city',component: City},
	{path: '/choose',component: Choose, children: [
		{path: '', component: Shop},
		{path: 'bizType2', component: Shop},
		{path: 'bizType1', component: Product},
	]},
	{path: '/search',component: Search},
	{path: '/playdetail',component: PlayDetail},
	{path: '/topic',component: Topic},
	{path: '/host',component: Host},
	{path: '/order',component: Order},
]

// 导出创建好的router的对象 
export default new VueRouter({
	// mode: 'history',
	routes
})