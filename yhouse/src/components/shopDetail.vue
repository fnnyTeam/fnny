<template>
	<div id="shopDetail" >
		<div class="shopDetail_header">
			<span class="shopDetail_header_back" @click="goBack()"></span>
			<h1 class="shopDetail_header_title" v-text="detailShopData.title"></h1>
			<span class="shopDetail_header_homePage"></span>
		</div>	
		<div class="shopDetail_scroll">
			<div class="shopDetail_content">
				<swiper :swiperdata = "swiperData"></swiper>
				<img :src="detailShopData.logoUrl" alt="">
				<article>
					<h1 class="shopDetail_title">{{ detailShopData.title }}</h1>
					<section >
						<p class="shopDetail_p"><span v-if="detailShopData.avgPrice" v-text="detailShopData.shopDetail_header_backavgPrice"></span><span v-for="item in detailShopData.tags" v-text="item"></span></p>
						<p class="shopDetail_interest" v-if='detailShopData.countOfInterested'>
							<span>{{ detailShopData.countOfInterested }}人收藏</span>
							
						</p>
						<p class="shopDetail_tagArr">
							<span v-if="detailShopData.tagArr" v-for="tag in detailShopData.tagArr" v-text="tag"></span>
						</p>
					</section>
					<section>
						<div class="shopDetail_contact">
						
							<p class="shopDetail_icon1"></p>
							<p class="shopDetail_address">{{ detailShopData.address }}</p>
							<p class="shopDetail_icon2"></p>
							
						</div>
						<div class="shopDetail_btn"><a href="" class="shopDetail_ty">点击体验</a></div>
					</section>
					<section>
						<h3>
							<span class="shopDetail_tj">推荐理由</span>
						</h3>
						<div class="shopDetail_highs" >
							<p v-for='item in detailShopData.highs'>{{ item }}</p>
						</div>
					
							<span class="shopDetail_more">查看详情</span>
						
					</section>
					
				</article>
			</div>
		</div>	
		<theme-footer></theme-footer>
	</div>
</template>

<script type="text/javascript">

	import Swiper from './swiper/swiper'
	import themeFooter from './footer/footer'
	export default{
		name: 'Host', 
		data () {
			return {
				id: this.$route.query.id,
				detailData: [],
				detailShopData: [],
				swiperData: []
			}
		},
		methods: {
			goBack () {
				history.back();
			}
		},
		components: {
			Swiper, themeFooter
		},
		created () {
			
			this.axios.get('/api/api/m/host/item-v3.8/'+ this.id +'?from=h5')
				.then(res => {
					this.detailShopData = res.data.data
					// console.log(this.detailShopData)

					for(var i=0; i<res.data.data.headPics.length; i++){
						this.swiperData.push({'picUrl':res.data.data.headPics[i]})
					}
					// console.log(this.swiperData)
				
			});

		}
	}
</script>
<style type="text/css">
	#shopDetail{
		background: #fff;
		padding-top: 45px;
	}
	.shopDetail_header{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 24;
		background: #fff;
		border-bottom: 1px solid #E5E5E5;
	}
	.shopDetail_header_back{
		display: block;
		position: absolute;
		width: 18px;
		height: 30px;
		top: 8px;
		left: 6px;
		background: url(http://r.yhres.com/member/icon_nav@3x.png?v4.3) no-repeat;
		background-position: 0 center;
		background-size: 36px 18px;
	}
	.shopDetail_header_homePage{
		display: block;
		position: absolute;
		top: 14px;
		right: 10px;
		width: 18px;
		height: 30px;
		background: url(http://r.yhres.com/member/icon_nav@3x.png?v4.3) no-repeat;
		background-size: 36px 18px;
		background-position: 0 center;
		background-position: -18px 0;
	}
	.shopDetail_header_title{
		font-weight: 700;
		line-height: 45px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 80%;
		margin: 0 auto;
		text-align: center;
		font-size: 0.15rem;
	}
	.shopDetail_scroll{
		position: absolute;
		top: 45px;
		bottom: .5rem;
		left: 0;
		right: 0;
		overflow-y: scroll;

	}
	.shopDetail_content{
		background-color: #fff;
	}
	.shopDetail_content>img{
		position: absolute;
	    display: block;
	    left: 50%;
	    top: 1.6rem;
	    margin-left: -.2rem;
	    margin-bottom: -.2rem;
	    width: .4rem;
	    height: .4rem;
	    background-size: .4rem auto;
	    border: .02rem solid #fff;
	    border-radius: 50%;
	    z-index: 100;
	}

	/*页面内容*/
	#shopDetail article{
		padding:  0 .2rem;
		text-align: center;
	}
	/*标题*/
	.shopDetail_title{
		color: #111;
	    padding-top: .15rem;
	    font-size: .19rem;
	    line-height: .3rem;
	    font-weight: 700;
	}
	/*价格*/
	.shopDetail_p{
	    font-size: .14rem;
	    line-height: .28rem;
	    padding-bottom: .05rem;
	}
	.shopDetail_p span{

	}
	.shopDetail_p span:not(:last-of-type):after{
		color: #ccc;
	    display: inline-block;
	    vertical-align: middle;
	    content: "|";
	    padding: 0 .09rem;
	    font-size: .09rem;
	    height: .09rem;
	    line-height: .04rem;
	}
	/*喜欢人数*/
	.shopDetail_interest{
		padding-bottom: 0.08rem;
	    color: #555;
	}
	.shopDetail_interest>span{
		padding-left: 17px;
	    background: url(../../static/imgs/icon_collection.png) left center no-repeat;
	    background-size: 12pt 15px;
	}
	.shopDetail_tagArr{
		padding-bottom: 0.08rem;
	}
	.shopDetail_tagArr span{
		color: #111;
	    font-size: .12rem;
	    border: 1px solid #777;
	    padding: 0 .04rem;
	    margin: 0 .02rem;
	}
	article>section:after{
		content: '';
		border-bottom: 1px solid #e1e1e1;
		display: block;
		width: 100%;
	}
	article>section{
		padding-bottom: .15rem;
	}

	/*店铺地址电话*/
	.shopDetail_contact{
	    color: #111;
	    overflow: hidden;
	    font-size: .14rem;
    	position: relative;
    	text-align: left;
    	
	}
	.shopDetail_contact>p{
		line-height: 27px;

	}
	.shopDetail_address{
		width: 70%;
		padding: 0 27px 10px 0;
	}
	.shopDetail_btn{
    	position: relative;
	    width: 100%;
	    height: .55rem;
		background: url(../../static/imgs/play/bg_text.png) .18rem center no-repeat rgba(255,255,255,.95);
    	background-size: auto .3rem;
	}

	.shopDetail_icon1{
		position: absolute;
	    right: 0.45rem;
	    bottom: 15%;
	    margin-top: -0.13587rem;
	    width: 0.28rem;
	    height: 0.28rem;
	    background: url(../../static/imgs/icon_sku.png);
	    background-size: 0.552536rem 0.28rem;
	    background-position: 0.271739rem;
	}
	.shopDetail_icon2{
		position: absolute;
	    right: 0;
	    bottom: 15%;
	    margin-top: -0.13587rem;
	    width: 0.28rem;
	    height: 0.28rem;
	    background: url(../../static/imgs/icon_sku.png);
	    background-size: 0.543478rem 0.28rem;
	}

	/*推荐理由*/
	#shopDetail h3{
		font-size: .15rem;
	    line-height: .42rem;
	    font-weight: 700;
	}
	#shopDetail section>h3>span{
		padding-left: .28rem;
		background-size: .2rem auto;
	}
	.shopDetail_highs{
		font-size: .14rem;
    	line-height: .25rem;
    	padding-bottom: .14rem;
	}
	.shopDetail_tj{
		background: url(../../static/imgs/play/tip-1.png) left center no-repeat;
	}


	/*点击体验*/
	.shopDetail_btn{
		position: relative;
		width: 100%;
    	height: .5rem;
    	margin-bottom: 10px;
	}
	.shopDetail_ty{
		position: absolute;
	    display: block;
	    width: .85rem;
	    height: .35rem;
	    line-height: .35rem;
	    text-align: center;
	    right: 0;
	    top: .1rem;
	    background: linear-gradient(120deg,#ff4d85 1%,#ff5a5e 100%);
	    color: #fff;
	    font-size: .14rem;
        border-radius: .02rem;
	}

	/****活动详情****/
	
	.shopDetail_more {
	    font-size: .12rem;
	    line-height: .4rem;
	    height: .4rem;
        color: #d9a961;
	    background: url(../../static/imgs/play/icon_link.png) right center no-repeat;
	    background-size: .05rem auto;
	    padding-right: .15rem;
	}	
</style>