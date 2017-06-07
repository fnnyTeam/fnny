<template>
	<div id="play">
		<!-- <p>{{ playSwiperData }}</p> -->
		<play-swiper :swiperdata='playSwiperData'></play-swiper>
		<!-- <h1>{{  data }}</h1> -->
		<div class="play_container">
			<!-- 时下最流行 时尚大作战 -->
			<div class="play_grids">
				<a href="" v-for='item in data'>
					<img :src="item.picUrl">
				</a>
			</div>

			<!-- 游玩列表 -->
			<div class="play_list">
				<section v-for='item in playData'>
					<a href="">
						<!-- 图片 -->
						<div class="play_pic">
							<img :src="item.picUrl">
						</div>
						<!-- 内容 -->
						<div class="play_content">
							<!-- 内容标题 -->
							<p class="play_title">{{ item.title }}</p>
							<!-- 内容价格 -->
							<div class="play_info clear">
								<p class="play_cityName">{{ item.cityName }}<em> | </em>{{ item.hostName}}</p>
								<p class="play_price">{{ item.neededCredits}}<!-- <em>元/1人</em> --></p>
							</div>
							<!-- 内容主题 -->
							<p class="play_tag">
								<span>{{ item.categorys[0] }}</span>
							</p>
						</div>
					</a>
				</section>
			</div>
			<!-- 查看更多 -->
			<div class="play_last">
				<p class="load_more unload">查看更多</p>
				<!-- <p class="load_more loading">加载中</p> -->
			</div>
			
		</div>
		<play-footer></play-footer>
	</div>	
</template>

<style type="text/css">
	body{
		font: .12rem 'PingFang SC','Helvetica Neue';
	}
	a{
		color: #111;
	}
	.play_grids{
		width: 100%;
		height: 1.557rem;
		margin-bottom: .15rem;
		display: flex;
	}
	.play_grids>a{
		width: 50%;
		border-radius: 4px;
		padding: 0 .045rem;
	}
	.play_grids>a:first-child{
			padding-right: 0;
	}
	.play_grids>a>img{
		width: 1.63rem;
		height: 1.54rem;

	}
	/*玩乐列表*/
	.play_list{
		background: #fff;
	}
	.play_list>section{
		margin-top: 14px;
	}
	.play_pic{
		width: 100%;
	}
	.play_pic>img{
		width: 100%;
		height: 2.13rem;
	}

	.play_content{
		background: #fff;
		line-height: 25px;
		padding: 8px .15rem 0;
    	text-align: left;

	}
	.play_content:after{
		display: block;
	    content: "";
	    width: 100%;
	    /*height: .15rem;*/
	    border-top: 1px solid #ddd;
	}
	.play_title{
		line-height: 22px;
		text-overflow: ellipsis;
		font-weight: 700;
		font-size: 18px;
		color: #111;
	}
	.play_info{
		margin: 5px 0;
	}
	.play_cityName{
		float: left;
		max-width: 50%;
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    font-size: 14px;
	    color: #333;
	}
	.play_cityName>em{
		color: #999;
		font-size: 7pt;
	}
	.play_price{
		float: right;
		color: #d9a961;
	}
	.play_tag{
		margin-bottom: 14px;
	}
	.play_tag>span{
		display: inline-block;
		padding: 0 8px;
		margin: 0 0 2px 6px;
		border-radius: 10px;
		border: 1px solid #e1e1e1;
		font-size: 13px;
		line-height: 20px;
		color: #555;
	}

	.play_last{
		background: #fff;
		position: relative;
		padding-top: 10px;
	}
	.load_more{
		height: 42px;
	    line-height: 42px;
	    text-align: center;
	    background-color: #fff;
	    color: #555;
	    font-size: 14px;
	    border-top: 1px solid #eee;
	}
	.load_more:after{
		content: "";
	    display: inline-block;
	    margin-left: 5px;
	}
	.load_more.unload:after{
		position: relative;
	    width: 15px;
	    height: 8px;
	    top: -1px;
	    background: url(../../../static/imgs/play/icon.png) no-repeat;
	    background-size: 40px auto;
	}
	.play_last>.unload{

	}
</style>


<script type="text/javascript">
// 引入轮播图组件
import playSwiper from './../../components/swiper/swiper'
// 引入footer组件
import playFooter from './../../components/footer/footer'

export default{
	name: 'play',
	props: ['playswiper'],
	components: {
		playSwiper,playFooter
	},
	data(){
		return {
			data: [],
			playData: [],
			playSwiperData:[]
		}

	},
	created(){
		this.axios.get('static/data/data/play/playShopList.json').then(res => {
			this.data = res.data.data.doc[1].itemData[0].content
			console.log(res.data)
			this.playData = res.data.data.doc[3].itemData
			this.playSwiperData = res.data.data.extraData.rocket.reserveList.content
			console.log(this.playSwiperData)
		},err =>{
			console.log(err);
		},'json')

	},
	

	
	// created(){
	// 	this.axios.get('api').then(res => {
	// 	    console.log(res.data);
	// 	})
	// }
}










</script>



