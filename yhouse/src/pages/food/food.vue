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
		<div class="play_last">
			<p class="load_more unload">查看更多</p>
			<!-- <p class="load_more loading">加载中</p> -->
		</div>
		<my-footer></my-footer>
	</div>	
</template>

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
			shopData: [],
			cityId:this.bus.cityId
		}

	},
	created () {
		this.axios.get('api/api/m/catalogData/list-v4.0?catalogId=2&cityId='+this.cityId+'&page=1&pageSize=10&siteId=-1').then(res => {
			this.jxThemeData = res.data.data.doc[2].itemData
			this.shopData = res.data.data.doc[3].itemData
			this.swiperData = res.data.data.extraData.rocket.reserveList[0].content
			// console.log(this.swiperData)
			this.bannerData = res.data.data.doc[1].itemData[0].content
		},err =>{
			console.log(err)
		},'json');


	},
	components: {
		jxTheme, shopList, Swiper, myFooter

	}

}

</script>

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


