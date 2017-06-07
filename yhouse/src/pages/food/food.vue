<template>
	<div class="food">
		<swiper :swiperdata = "swiperData"></swiper>
		<jx-theme :jxThemeData = "jxThemeData"></jx-theme>
		<shop-list :shopData="shopData"></shop-list>
		<div class="load_more unload">查看更多</div>
		<my-footer></my-footer>
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
		<div class="food_banner">
			<div class="food_bannerPic" v-for="item in bannerData">
				<a href=""><img :src="item.picUrl" alt=""></a>
			</div>
		</div>
=======
<<<<<<< HEAD
		<jx-theme :jxThemeData = "jxThemeData"></jx-theme>
		<shop-list :shopData="shopData"></shop-list>
		<my-footer></my-footer>
=======
		
>>>>>>> aa0b7bd115002a4448b84cb0114a23115c2f213b
>>>>>>> ba9d29c76f6c56859fee83baa500fccdd9d52384
>>>>>>> 9ce988919d3f6b8071959aac9507f51ad5f61c48
>>>>>>> 9b117907be6c468d62dd5f9ac9ee2a5a4704a7e5
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
<<<<<<< HEAD
			bannerData: []
=======
			jxThemeData: [],
			shopData: []
>>>>>>> ba9d29c76f6c56859fee83baa500fccdd9d52384
		}
	},
	created () {
		this.axios.get('static/data/data/food/jxtheme.json').then(res => {
			this.swiperData = res.data.data.reserveList[0].content
			this.bannerData = res.data.data.bundle[0].content
			console.log(this.bannerData)
			
		},err =>{
<<<<<<< HEAD
			console.log(err)
		},'json')
		
=======
			console.log(err);
		},'json');
		this.axios.get('./static/data/food/shopList.json')
		.then(res=>{
			//console.log(res.data.data.doc[2].itemData);
			this.jxThemeData = res.data.data.doc[2].itemData
		},err=>{
			console.log(err);
		});
		this.axios.get('./static/data/food/shopList.json')
		.then(res => {
			//console.log(res.data.data.doc[3].itemData[5].commentTags);
			this.shopData = res.data.data.doc[3].itemData;
		})
	},

	components: {
		jxTheme, shopList, Swiper, myFooter
>>>>>>> ba9d29c76f6c56859fee83baa500fccdd9d52384
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


