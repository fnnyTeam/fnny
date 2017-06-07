<template>
<div class="swiper">
    <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 --> 
	        <swiper-slide v-for="item in swiperdata"  :key="item.id">
	        	<img :src="item.picUrl" alt="item.title">
	        </swiper-slide> 
        <!-- 这是轮播的小圆点 -->  
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper> 
</div>  
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
    export default {
    	props: ['swiperdata'], 
        components: {  
            swiper,  
            swiperSlide  
        },  
        data() {  
            return {  
                swiperOption: {

	                loop: true,
	                autoplay: 3000,
	                pagination: '.swiper-pagination', 
	                paginationClickable: true

                },
                
            }

        },   
    }
	       
</script>

<style>
	.swiper{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 1.8rem;
		margin-bottom: 0.14rem;
	}
	.swiper-container img{
		width: 100%;
		height: 100%;
	}
	.swiper-container{
		width: 100%;
		height: 100%;
	}
	.swiper-pagination{
		position: absolute;
	    bottom: 10px;
	    left: 50%;
	    z-index: 400;
	    width: 100%;
	    padding-left: 0;
	    text-align: center;
	}
	.swiper-pagination-bullet{
		width: 0.04529rem;
		height: 0.04529rem;
		margin: 0 0.067935rem !important;
	}
	 .swiper-pagination-bullet-active{
	 	background: rgba(255,255,255,.3);
	}
</style>