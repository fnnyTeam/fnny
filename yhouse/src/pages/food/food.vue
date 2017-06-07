<template>
	<div class="food">
		<swiper :swiperdata = "swiperData"></swiper>
		<jx-theme :jxThemeData = "jxThemeData"></jx-theme>
		<shop-list :shopData="shopData"></shop-list>
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
			jxThemeData: [],
			shopData: []
		}
	},
	created () {
		this.axios.get('static/data/data/food/jxtheme.json').then(res => {
			this.swiperData = res.data.data.reserveList[0].content
			console.log(this.swiperData)
		},err =>{
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
	}

}

</script>

<style type="text/css">

</style>


