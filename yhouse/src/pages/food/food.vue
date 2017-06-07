<template>
	<div class="food">
		<swiper :swiperdata = "swiperData"></swiper>
		<div class="food_banner">
			<div class="food_bannerPic" v-for="item in bannerData">
				<a href=""><img :src="item.picUrl" alt=""></a>
			</div>
		</div>
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
import Swiper from './../../components/swiper/swiper'
export default{
	name: 'food',
	
	components: {
		Swiper
	},
	data () {
		return {
			swiperData: [],
			bannerData: []
		}
	},
	created () {
		this.axios.get('static/data/data/food/jxtheme.json').then(res => {
			this.swiperData = res.data.data.reserveList[0].content
			this.bannerData = res.data.data.bundle[0].content
			console.log(this.bannerData)
			
		},err =>{
			console.log(err)
		},'json')
		
	}
}

</script>