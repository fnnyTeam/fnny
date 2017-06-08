<template>
	<div class="food">
		<swiper :swiperdata = "swiperData"></swiper>

		<div class="food_banner">
			<div class="food_bannerPic" v-for="item in bannerData">
				<a href=""><img :src="item.picUrl" alt=""></a>
			</div>
		</div>

		<jx-theme :jxThemeData = "jxThemeData"></jx-theme>
		<shop-list :shopData="shopData"></shop-list>
		<my-footer></my-footer>

	</div>	
</template>
<style type="text/css">
	.food_banner{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 100%;
		height: 1.5rem;
		margin-bottom: 0.099638rem;
		
	}
	.food_bannerPic{
		width: 48.5%;
		height: 46%;
	}
	.food_bannerPic a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.food_bannerPic img{
		width: 100%;
		height: 100%;
	}
</style>
<script type="text/javascript">



import jxTheme from '../../components/jxTheme/jxTheme'
import shopList from '../../components/shopList/shopList'
import Swiper from './../../components/swiper/swiper'
import myFooter from './../../components/footer/footer'

export default{
	name: 'food',

	data () {
		return {
			swiperData: [],

			bannerData: [],

			jxThemeData: [],
			shopData: []

		}
	},
	created () {
		
		this.axios.get('api/api/m/catalogData/list-v4.0?catalogId=2&cityId=1&page=1&pageSize=10&siteId=-1').then(res => {
			this.jxThemeData = res.data.data.doc[2].itemData
			this.shopData = res.data.data.doc[3].itemData
			
		},err =>{

			console.log(err)
		},'json')
		this.axios.get('api/api/rocket/launch?siteId=m&catalogId=2&cityId=1&ts=1496884121310&type=100,101,103').then(res => {
			
			this.swiperData = res.data.data.reserveList[0].content
			this.bannerData = res.data.data.bundle[0].content
	
		},err =>{

			console.log(err)
		},'json')
	},

	components: {
		jxTheme, shopList, Swiper, myFooter
	}

}

</script>

<style type="text/css">

</style>


