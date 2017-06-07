<template>
	<div class="food">
		<swiper :swiperdata = "swiperData"></swiper>
		
	</div>	
</template>

<script type="text/javascript">
import Swiper from './../../components/swiper/swiper'
export default{
	name: 'food',
	
	components: {
		Swiper
	},
	data () {
		return {
			swiperData: []
		}
	},
	created () {
		this.axios.get('static/data/data/food/jxtheme.json').then(res => {
			this.swiperData = res.data.data.reserveList[0].content
			console.log(this.swiperData)
		},err =>{
			console.log(err)
		},'json')
	}
}

</script>