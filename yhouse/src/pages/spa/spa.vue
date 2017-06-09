<template>
	<div class="spa">
		<spa-swiper :swiperdata = "swiperData"></spa-swiper>
		<spa-jx-theme :jxThemeData = "jxThemeData"></spa-jx-theme>
		<spa-shop-list :shopData="shopData"></spa-shop-list>
		<div class="load_more unload">查看更多</div>
		<spa-my-footer></spa-my-footer>
	</div>	
</template>

<script type="text/javascript">

import spaJxTheme from '../../components/jxTheme/jxTheme'
import spaShopList from '../../components/shopList/shopList'
import spaMyFooter from './../../components/footer/footer'
import spaSwiper from './../../components/swiper/swiper'

export default{
	name: 'spa',
	data () {
		return {
			jxThemeData: [],
			shopData: [],
			swiperData: [],
			cityId: this.bus.cityId

		}
	},
	mounted () {
		
		this.axios.get('api/api/m/catalogData/list-v4.0?catalogId=12&cityId='+ this.cityId +'&page=1&pageSize=10&siteId=-1').then(res => {
			this.swiperData = res.data.data.extraData.rocket.reserveList[0].content
			
			this.jxThemeData = res.data.data.doc[2].itemData

			this.shopData = res.data.data.doc[3].itemData;

		},err =>{
			console.log(err);
		},'json')
		
		
	},

	components: {
		spaJxTheme, spaShopList, spaMyFooter, spaSwiper
	}
}

</script>

<style type="text/css">
	.load_more{
		height: 42px;
		line-height: 42px;
		text-align: center;
		background-color: #fff;
		color: #555;
		font-size: 14px;
		border-top: 1px solid #eee;
	}
	.load_more:after{
		position: relative;
		width: 15px;
		height: 8px;
		top: -1px;
		background: url(../../../static/imgs/play/icon.png) no-repeat;
		background-size: 40px auto;
		content: "";
		display: inline-block;
		margin-left: 5px;
	}
</style>