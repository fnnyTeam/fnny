<template>
	<div id="themeDetail" >
		<div class="themeDetail_header">
			<a class="themeDetail_header_back" @click="goBack()"></a>
			<h1 class="themeDetail_header_title">专题详情</h1>
			<a class="themeDetail_header_homePage" @click="backHome()"></a>
		</div>
		<div class="themeDetail_pic">
			<img :src="detailImgData" class="themeDetail_pic_icon">
			<div class="themeDetail_pic_content">
				<div v-html="detailData" class="themeDetail_pic_p">					
				</div>
			</div>
		</div>
		<ul class="themeDetail_shop">
			<div class="themeDetail_shop_contaner">
				<li class="themeDetail_shop_li" v-for="item in detailShopData" @click="getDetailData()">
					<div class="themeDetail_lightBox"></div>
					<div class="themeDetail_shop_icon">
						<img :src="item.picUrl">
					</div>
					<div class="themeDetail_shop_content">
						<p class="themeDetail_shop_name">{{ item.hostName }}</p>
						<p class="themeDetail_shop_price">{{ item.price }}</p>
						<p class="themeDetail_shop_produce">{{ item.districtName }}&nbsp|&nbsp{{ item.cuisineStyle }}</p>
					</div>
				</li>
			</div>
		</ul>
	<theme-footer></theme-footer>
	</div>
</template>

<script type="text/javascript">

	import themeFooter from './footer/footer'
	export default{
		name: 'Topic', 
		data () {
			return {
				id: this.$route.query,
				detailData: '',
				detailShopData: [],
				detailImgData: [],
				detailId: [],
				
			}
		},
		methods: {
			goBack () {
				history.back();
			},
			getDetailData () {

			},
			backHome () {
				this.$router.push({
					path: '/food'
				})
			}
		},
		created () {
			console.log(this.$route.query);
			console.log(this.id);
			this.detailId = this.id.id
			this.axios.get('api/api/m/topic/item-v2.6/'+this.detailId+'?from=h5&page=1&pageSize=10')
			.then(res => {
				this.detailData = res.data.data.topicDescription
				this.detailShopData = res.data.data.contentList
				this.detailImgData = res.data.data.picUrl
			});
		},
		components: {
			themeFooter
		}
	}
</script>

<style type="text/css">
	#themeDetail{
		background: #fff;
		padding-top: 45px;
	}
	.themeDetail_header{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 24;
		background: #fff;
		border-bottom: 1px solid #E5E5E5;
	}
	.themeDetail_header_back{
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
	.themeDetail_header_homePage{
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
	.themeDetail_header_title{
		font-weight: 700;
		line-height: 45px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 80%;
		margin: 0 auto;
		text-align: center;
		/*font-size: ;*/
	}
	.themeDetail_pic_icon{
		position: relative;
		overflow: hidden;
		width: 3.75rem;
		height: 1.9348rem;
	}
	.themeDetail_pic_content{
		font-size: 14px;
		color: #555;
		overflow: hidden;
		padding: 25px 0 30px;
	}
	.themeDetail_pic_p p{
		width: 100%;
		text-align: center;
		line-height: 24px;
		color: #666;
		word-wrap: break-word;
		word-break: break-all;
	}
	.themeDetail_shop{
		padding: 0 10px;
	}
	.themeDetail_shop_contaner{
		width: 100%;	
	}
	.themeDetail_shop_li{
		position: relative;
		padding: 0 5px;
		margin-top: 5px;
	}
	.themeDetail_shop_icon img{
		width: 100%;
	}
	.themeDetail_lightBox{
		position: absolute;
		left: 5px;
		right: 5px;
		top: 0;
		bottom: 5px;
		background-color: rgba(0,0,0,.4);
	}
	.themeDetail_shop_content{
		position: absolute;
		top: 41px;
		bottom: 5px;
		left: 9pt;
		width: 93%;
		color: #fff;
	}
	.themeDetail_shop_name{
		width: 100%;
		text-align: center;
		font-weight: 700;
	}
	.themeDetail_shop_price{
		font-weight: 700;
		font-size: 14px;
		position: absolute;
		line-height: 24px;
		bottom: .45rem;
		left: 0;
		width: 100%;
		text-align: center;
	}
	.themeDetail_shop_produce{
		text-align: center;
		position: absolute;
		width: 100%;
		left: 0;
		bottom: .28rem;
	}
</style>