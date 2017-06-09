<template>
	<div class="shopList">
		<ul>
		
			<li v-for="item in shopData" class="shopList_li">
				<div class="shopList_title">
					<img :src="item.logoUrl" class="shopList_title_icon">
					<h2 class="shopList_title_content">{{ item.title }}</h2>
				</div>
				<div class="shopList_img">
					<img :src="item.picUrl">
					<span class="shopList_img_price">{{ item.priceStr }}</span>
				</div>
				<div class="shopList_introduce">
					<p class="shopList_introduce_title">{{ item.highLigth }}</p>
					<span class="shopList_introduce_enter">进店逛逛</span>
					<p class="shopList_introduce_address">{{ item.businessesDistrict }}<em>|</em>{{ item.cuisineStyle }}</p>
					<span class="shopList_introduce_comment" v-for="i,index in item.commentTags" >{{ i }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'shopList',
		props: ['shopData', 'tagData'],
		
	}
</script>

<style type="text/css">
	.shopList_li{
		border-bottom: 1px solid #EFEFEF;
	}
	.shopList_title{
		width: 100%;
		background-color: #fff;
	    height: .7rem;
	    padding: 0 .15rem 0 .7rem;
	    box-sizing: border-box;
    	outline-style: none!important;
    	position: relative;
	}
	.shopList_title_icon{
		width: .4rem;
	    height: .4rem;
	    float: left;
	    overflow: hidden;
	    position: absolute;
	    top: .15rem;
	    left: .15rem;
	    margin-right: .15rem;
	    box-sizing: border-box;
    	outline-style: none!important;
	}
	.shopList_title_content{
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    font-weight: 700;
    	font-size: .18rem;
    	font-family: inherit;
    	line-height: .7rem;
    	padding-top: 0;
	}
	.shopList_img{
		position: relative;

	}
	.shopList_img img{
		width: 100%;
		height: 50%;
	}
	.shopList_img_price{
		position: absolute;
		left: 0;
	    bottom: .15rem;
	    font-size: .12rem;
	    color: #fff;
	    padding: .06rem .12rem;
	    background-color: rgba(0,0,0,.92);
	}
	.shopList_introduce{
		position: relative;
	    background-color: #fff;
	    padding: .07rem .15rem .28rem;
	    color: #111;
	    box-sizing: border-box;
	    outline-style: none!important;
	}
	.shopList_introduce_title{
		font-size: .17rem;
	    line-height: .31rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.shopList_introduce_enter{
		position: absolute;
		right: .15rem;
	    bottom: .32rem;
	    color: #d9a961;
	    font-size: .14rem;
	    padding-right: .1rem;
	    background: url(http://r.yhres.com/sku/icon_allow@2x.png) right center no-repeat;
	    background-size: .05rem auto;
	}
	.shopList_introduce_address{
		font-size: .14rem;
    	line-height: .28rem;
    	
	}
	.shopList_introduce_comment{
		float: left;
	    height: 25px;
	    border: 1px solid #ddd;
	    color: #555;
	    font-size: 9pt;
	    text-align: center;
	    line-height: 25px;
	    padding: 0 9px;
	    border-radius: 20px;
	    margin-right: 7px;
	}
</style>
