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
	{path: '/choose',component: Choose},
	{path: '/search',component: Search},
]

// 导出创建好的router的对象
export default new VueRouter({
	mode: 'history',
	routes
})