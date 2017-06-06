<template>
	<div class="swiper">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">Slide 1</div>
		        <div class="swiper-slide">Slide 2</div>
		        <div class="swiper-slide">Slide 3</div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
	import Swiper from './../../../static/js/swiper-3.4.2.jquery.min.js'

	export default {
		name: 'swiper',
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
				 
			    loop: true,
			    autoplay: 4000,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    
			  })  
		}
		
	} 

	       
</script>
<style>
	@import "swiper-3.4.2.min.css"
</style>