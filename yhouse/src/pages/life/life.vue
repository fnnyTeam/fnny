<template>
	<div class="life">
		<swiper :swiperdata = "swiperData"></swiper>
		<jx-theme :jxThemeData = "jxThemeData"></jx-theme>
		<shop-list :shopData="shopData"></shop-list>
		<div class="load_more unload">查看更多</div>
		<my-footer></my-footer>
	</div>	
</template>

<script type="text/javascript">

import jxTheme from '../../components/jxTheme/jxTheme'
import shopList from '../../components/shopList/shopList'
import myFooter from './../../components/footer/footer'
import Swiper from './../../components/swiper/swiper'

export default{
	name: 'life',
	data () {
		return {
			jxThemeData: [],
			shopData: [],
			swiperData: []
		}
	},
	created () {
		this.axios.get('static/data/data/life/lifeSwiper.json').then(res => {
			this.swiperData = res.data.data.reserveList[0].content
			//console.log(this.swiperData)
		},err =>{
			console.log(err);
		},'json');
		this.axios.get('./static/data/life/lifeShopList.json')
		.then(res=>{
			//console.log(res.data.data.doc[2].itemData);
			this.jxThemeData = res.data.data.doc[2].itemData
		},err=>{
			console.log(err);
		});
		this.axios.get('./static/data/life/lifeShopList.json')
		.then(res => {
			//console.log(res.data.data.doc[3].itemData[5].commentTags);
			this.shopData = res.data.data.doc[3].itemData;
		})
	},

	components: {
		jxTheme, shopList, myFooter, Swiper
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

