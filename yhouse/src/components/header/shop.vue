<template>
	<div class="shop">
		<!-- <div class="choose_filter_div">	
			<ul class="choose_filter_condition" >
				<li class="choose_filter_st">
					<ul class="choose_filter_st_left">
						<li>全部</li>
					</ul>
					<ul class="choose_filter_st_right">
						<li>全部不</li>
						
					</ul>
				</li>
				<!-- <li class="choose_filter_nd">
					<ul class="choose_filter_st_left">
						<li>全部</li>
					</ul>
					
				</li>
				<li class="choose_filter_rd">
					<ul class="choose_filter_st_left">
						<li>全部</li>
					</ul>
					
				</li> -->
			</ul>
		<!-- </div> --> 
			
		<div class="choose_content">		
			<a href="" v-for="item in chooseContentData">
				<div class="choose_shop">
					<span class="choose_reserve" v-if="item.productInfo.todayReserve">可定今日</span>
					<img :src="item.productInfo.picUrl" alt="">
					<div class="choose_shop_content">
						<h3 v-text="item.productInfo.hostName"></h3>
						<p><span v-text="item.productInfo.businessesDistrict"></span><span v-if="item.productInfo.cuisineStyle"> · </span></span><span v-text="item.productInfo.cuisineStyle"></span></p>
						<p>人均：<span v-text="item.productInfo.priceStr"></span></p>
					</div>		
				</div>
			</a>
			
		</div>
	</div>
	
</template>
<script type="text/javascript">
	export default {
		name: 'shop',
		data(){
			return{
				chooseContentData:[]
			}
		},
		props: ['cityId'],
		mounted(){

			this.axios.get('/api/api/m/search-v4.2?bizType=2&catalog=31&cityId='+ this.cityId +'&filter=2&mc=&page=1&pageSize=10&sort=1').then(res => {
				this.chooseContentData = res.data.data.searchData.doc		
				// console.log(this.chooseContentData)		
			},err =>{
				console.log(err)
			},'json')
		}
	}
</script>
<style type="text/css">
	.choose_filter_div{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 20;
	}
	.choose_filter_type{
		position: absolute;
		top: 0.4rem;
		left: 0;
		right: 0;
		display: flex;
		border-bottom: 1px solid #ddd;
		background-color: #fff;
	}
 	.choose_filter_type li{
		position: relative;
		flex: 1;
		line-height: 0.4rem;
		text-align: center;
		color: #999;
	}
	.choose_filter_type li:last-of-type{
	   
	    background-image: url(../../../static/imgs/choose/arrows_down.png);
	    background-size: .1rem auto;
	    background-repeat: no-repeat;
	    background-position: 0.85rem center;
	}
	.choose_filter_type li:not(:last-child):after{
		position: absolute;
	    right: 0;
	    top: .12rem;
	    width: 1px;
	    display: block;
	    content: "";
	    height: .21rem;
	    background-color: #ddd;
	}
	.choose_filter_condition{
		position: absolute;
		top: 0rem;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.4);
		overflow-y: hidden; 
	}
	.choose_filter_st{
		display: flex;
		width: 100%;
		height: 3.859964rem;
		background-color: #fff;
		font-size: .12rem;
		color: #111;
	}
	
	.choose_filter_st_left{
		flex: 1;
		height: 100%;
		background-color:#f4f4f4; 
	}
	.choose_filter_st_left li{		
        height: .4rem;
    	line-height: .4rem;
	    padding-left: .46rem;
	    background-image: url(http://r.yhres.com/search2/all@2x.png);
    	background-size: 0.13rem;
        background-color: #fff;
	    background-position: .24rem center;
	    background-repeat: no-repeat;
	}
	.choose_filter_st_right{
		flex: 1;
	    height: 100%;
	    background-color: #fff;
	    /*overflow-y: scroll;*/
	    padding-left: .15rem;
	    padding-right: .11rem;
	}
	.choose_filter_st_right li{
		height: .4rem;
	    line-height: .4rem;
	    border-bottom: 1px solid #ddd;
	}
	
	.choose_content{
		/*position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;*/
		padding: 0 0.15rem;

	}
	.choose_shop{
		position: relative;
		display: flex;
		width: 100%;
		height: 1.2rem;
		padding: 0.15rem 0;
		border-bottom: 1px solid #ddd;
	}
	.choose_reserve{
		position: absolute;
		top: .2rem;
    	left: .05rem;
		display: block;
	    color: #555;
	    font-size: .1rem;
	    height: .17rem;
	    line-height: .17rem;
	    background-color: rgba(255,255,255,.95);
	    padding: 0 .07rem;
	    -webkit-border-radius: .17rem;
	    -moz-border-radius: .17rem;
	    -ms-border-radius: .17rem;
	    -o-border-radius: .17rem;
	    border-radius: .17rem;
	}
	.choose_shop img{
		display: block;
		vertical-align: bottom;
		width: 1.6rem;
		height: 1.2rem;
		margin-right: 0.13587rem;
	}
	.choose_shop .choose_shop_content{
		width: 1.600181rem;
		height: 100%;
	}
	.choose_shop_content h3{
	    font-size: .16rem;
	    font-weight: 700;
	    color: #111;
	    line-height: .22rem;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    word-break: break-word;
	    overflow: hidden;
	}
	.choose_shop_content p{
		line-height: .22rem;
	    color: #555;
	    font-size: .12rem;
	}
	.choose_shop .product_special{
		color: #d9a961;
	}
	.choose_tag{
		position: absolute;
		bottom: 0.15rem;
		width: 1.502627rem;
		overflow: hidden;
	}
	.choose_tag span{
	    display: inline-block;
	    color: #555;
	    font-size: .11rem;
	    height: .15rem;
	    line-height: .15rem;
	    margin-right: .05rem;
	    padding: 0 .06rem;
	    -webkit-border-radius: .22rem;
	    -moz-border-radius: .22rem;
	    -ms-border-radius: .22rem;
	    -o-border-radius: .22rem;
	    border-radius: .22rem;
	    border: 1px solid #ccc;
	}
	.choose_more{ 
		width: 100%;
		height: 0.380435rem;
	    line-height: 0.380435rem;
	    text-align: center;
	    color: #555;
	    font-size: 0.126812rem;
	    border-top: 1px solid #eee
	}
	.choose_bottom{
		width: 100%;
		height: 0.362319rem;
		background-repeat: no-repeat;
	    background-image: url(http://r.yhres.com/bottomline@2x.png?v4.3);
	    background-position: center center;
	    background-size: 2rem .2rem;
	    background-color: #f4f4f4;
	}
</style>