<template>
	<div id="playDetail">
		<header>
			<a href="" class="playDetail_back" @click='goBack'></a>
			<h1>活动详情</h1>
			<a href="" class="playDetail_home"></a>
		</header>
		<div class="playDetail_scroll">
			<div class="playDetail_content">
				<div class="playDetail_pic">
					<img :src="playDetailData.mPicUrl">
				</div>
				<article>
					<h1 class="playDetail_title">{{ playDetailData.title }}</h1>
					<section >
						<p class="playDetail_price">{{ playDetailData.price }}</p>
						<p class="playDetail_interest" v-if='playDetailData.countOfInterested'>
							<span>{{ playDetailData.countOfInterested }}人喜欢</span>
						</p>
					</section>
					<section>
						<div class="playDetail_contact">
							<p class="playDetail_duration">{{  playDetailData.duration}}</p>
							<p class="playDetail_icon1"></p>
							<p class="playDetail_address">{{ playDetailData.address }}</p>
							<p class="playDetail_icon2"></p>
							<p class="playDetail_hostName">本服务由{{ playDetailData.hostName }}提供</p>
						</div>
						<div class="playDetail_btn"><a href="" class="playDetail_ty">点击体验</a></div>
					</section>
					<section>
						<h3>
							<span class="playDetail_tj">推荐理由</span>
						</h3>
						<div class="playDetail_highs" >
							<p v-for='item in playDetailData.highs'>{{ item }}</p>
						</div>
					</section>
					<section>
						<h3>
							<span class="playDetail_xq">活动详情</span>
						</h3>
							<p class="playDetail_dec">{{ playDetailData.description }}</p>
							<a href="" class="playDetail_more">完整活动详情</a>
					</section>
					<section>
						<h3>
							<span class="playDetail_ts">温馨提示</span>
						</h3>
						<p>使用日期：{{ playDetailData.productAdvice.startDate }} - {{ playDetailData.productAdvice.endDate }}</p>
						<p >截止日期：{{ playDetailData.productAdvice.applyExpiredTime }}</p>
						<p class="playDetail_tsInfo" v-if='playDetailData.productAdvice.refundDesc'>
							<span >{{ playDetailData.productAdvice.refundDesc }}</span>
							<span>{{  playDetailData.productAdvice.subscribeDesc}}</span>
						</p>
						<p class="playDetail_kf">
							<span class="playDetail_chat">在线客服</span>
							<span class="playDetail_service">电话客服</span>
						</p>
					</section>
				</article>
			</div>
			<play-detail-footer></play-detail-footer>
		</div>
		<div class="playDetail_bottom">
			<span class="sure">立即购买</span>
		</div>
	</div>
	
</template>

<style type="text/css">
	#playDetail{
		background-color: #fff;
	}
	#playDetail>header{
		background-color: #fff;
		width: 100%;
		height: 45px;
		line-height: 45px;
		border-bottom: 1px solid #e1e1e1;
		color: #111;
		font-size: 18px;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
	#playDetail h1{
		font-weight: 700;

	}
	#playDetail>header>a{
		display: block;
	    width: 30px;
	    height: 30px;
	    background-position: 0 center;
	    position: absolute;
	    top: 8px;
	    
	}
	.playDetail_back{
		left: 0;
	}
	.playDetail_home{
		right: 10px;
	}
	#playDetail>header>a:before{
		content: "";
	    display: block;
	    position: absolute;
	    width: 18px;
	    height: 18px;
	    top: 6px;
	    left: 6px;
	    background-size: 36px 18px;
	}
	.playDetail_back:before{
	    background: url(../../../static/imgs/play/header.png) no-repeat;
	}
	.playDetail_home:before{
	    background: url(../../../static/imgs/play/header.png) no-repeat;
	    background-position: -18px 0;
	}
	.playDetail_scroll{
		position: absolute;
		top: 45px;
		bottom: .5rem;
		left: 0;
		right: 0;
		overflow-y: scroll;

	}
	.playDetail_content{
		/*height: 1000px;*/
		background-color: #fff;
	}
	.playDetail_pic{
		position: relative;
	    background: url(../../../static/imgs/bg_logo.png) center no-repeat #fff;
	    background-size: .8rem auto;
	    width: 100%;
	    height: 2.17rem;
	}
	.playDetail_pic>img{
		width: 100%;
	    height: 2.17rem;
	}

	/*页面内容*/
	#playDetail article{
		padding:  0 .2rem;
		text-align: center;
	}
	/*标题*/
	.playDetail_title{
		color: #111;
	    padding-top: .15rem;
	    font-size: .19rem;
	    line-height: .3rem;
	    font-weight: 700;
	}
	/*价格*/
	.playDetail_price{
		font-size: 24px;
    	color: #d9a961;
    	line-height: .25rem;
    	padding-bottom: .015rem;
	}
	/*喜欢人数*/
	.playDetail_interest{
		padding: 8px 0;
	    color: #555;
	}
	.playDetail_interest>span{
		padding-left: 17px;
	    background: url(../../../static/imgs/icon_like.png) left center no-repeat;
	    background-size: 9pt 10px;
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
	.playDetail_contact{
	    color: #111;
	    overflow: hidden;
	    font-size: .14rem;
    	position: relative;
    	text-align: left;
    	
	}
	.playDetail_contact>p{
		line-height: 27px;

	}
	.playDetail_duration{
		padding: 0 27px 10px 0;
		font-family: '微软雅黑';
		font-size: .12rem;
	}
	.playDetail_address{
		padding: 0 27px 10px 0;
	}
	.playDetail_btn{
    	position: relative;
	    width: 100%;
	    height: .55rem;
		background: url(../../../static/imgs/play/bg_text.png) .18rem center no-repeat rgba(255,255,255,.95);
    	background-size: auto .3rem;
	}

	.playDetail_icon1{
		position: absolute;
	    right: 0;
	    top: 20%;
	    margin-top: -15px;
	    width: 30px;
	    height: 30px;
	    background: url(../../../static/imgs/icon_sku.png);
	    background-size: 61px 30px;
	}
	.playDetail_icon2{
		position: absolute;
	    right: 0;
	    bottom: 15%;
	    margin-top: -15px;
	    width: 30px;
	    height: 30px;
	    background: url(../../../static/imgs/icon_sku.png);
	    background-size: 60px 30px;
	}
	.playDetail_hostName{
		width: 100%;
	    color: #999;
	    padding-bottom: 7px;
	    line-height: 18px;
	    font-size: .14rem;
	}
	/*推荐理由*/
	#playDetail h3{
		font-size: .15rem;
	    line-height: .42rem;
	    font-weight: 700;
	}
	#playDetail section>h3>span{
		padding-left: .28rem;
		background-size: .2rem auto;
	}
	.playDetail_highs{
		font-size: .14rem;
    	line-height: .25rem;
    	padding-bottom: .16rem;
	}
	.playDetail_tj{
		background: url(../../../static/imgs/play/tip-1.png) left center no-repeat;
	}
	.playDetail_xq{
		background: url(../../../static/imgs/play/tip-2.png) left center no-repeat;
	}
	.playDetail_ts{
		background: url(../../../static/imgs/play/tip-3.png) left center no-repeat;
		
	}


	/*点击体验*/
	.playDetail_btn{
		position: relative;
		width: 100%;
    	height: .5rem;
    	margin-bottom: 10px;
	}
	.playDetail_ty{
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
	.playDetail_dec{
		font-size: 14px;
    	line-height: 28px;
	}
	.playDetail_more {
	    font-size: .14rem;
	    line-height: .4rem;
	    height: .4rem;
        color: #d9a961;
        background-size: .05rem auto;
	    background: url(../../../static/imgs/play/icon_link.png) right center no-repeat;
	    padding-right: .15rem;
	}
	
	/****温馨提示****/
	.playDetail_tsInfo>span{
		background: url(../../../static/imgs/play/icon2.png) no-repeat;
	    background-position: left center;
	    background-size: 14px 14px;
	    padding-left: .18rem;
   	 	margin: 0 .075rem;
	}
	/*在线客服*/
	.playDetail_kf{
		padding-bottom: .2rem;
	}

	article>section:last-child p{
		line-height: .25rem;
	}
	.playDetail_kf>span{
		color: #d9a961;
	    padding: .04rem .1rem .04rem .2rem;
	    margin: 0 .1rem;
	    background-position: left center,right center;
	    background-repeat: no-repeat,no-repeat;
	}
	.playDetail_chat{
		background-image: url(../../../static/imgs/play/icon_chat.png),url(../../../static/imgs/play/icon_link.png);
    	background-size: .14rem auto,.05rem auto
	}
	.playDetail_service{
		background-image: url(../../../static/imgs/play/icon_service.png),url(../../../static/imgs/play/icon_link.png);
    	background-size: .14rem auto,.05rem auto
	}
	/****立即购买****/
	.playDetail_bottom{
		background-color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		color: #fff;
		font-size: .17rem;
		background: linear-gradient(-125deg,#ebb761 0,#edc776 100%);
	}
	.playDetail_bottom>.sure{
		padding-right: .13rem;
	    background: url(../../../static/imgs/play/sure.png) right center no-repeat;
	    background-size: .08rem auto;

	}
</style>

<script type="text/javascript">

// import playDetailSwiper from './../../components/swiper/swiper'

// 引入footer组件
import playDetailFooter from './../../components/footer/footer'

	export default{
		methods:{
			goBack(){
				history.back()
			}
		},
		data(){
			return{
				id: this.$route.query.id,
				playDetailData: [],
				// swiperData:[]
			}
		},
		created(){
			this.axios.get('api/api/m/event/item-v2.3/' + this.id +'?from=h5').then(res =>{
				this.playDetailData = res.data.data;
				this.swiperData = res.data.data.mPicUrl
				console.log(res.data.data);
			})
		},
		components:{
			// playDetailSwiper,
			playDetailFooter,

		}
	}

</script>