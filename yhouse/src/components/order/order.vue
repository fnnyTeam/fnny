<template>
	<div id="order">
		<div class="order">
			<div class="order_header">
				<a class="orser_header_back" @click="goBack()"></a>
				<h1 class="orser_header_title">我的订单</h1>
				<a class="orser_header_homePage" @click="backHome()"></a>
			</div>
			<ul class="order_type">
				<li v-for="item, index in ['全部', '待处理', '可使用', '退款'] " @click = "toOrder(index)" :class="{'active': index == currentIndex}">{{ item }}</li>
			</ul>
			<div class="order_content">
				<div>
					<p class="order_list_header">
						<span class="unpay">待支付</span>
						<span class="order_time">2017.06.08 10:00 ~ 2017.12.30 19:00</span>
					</p>
					<div class="order_list_content">
						<div class="left_icon">
							<img src="http://f.yhres.com/host/2017/06/08/1496903245107_479823.png-sq75h">
						</div>
						<div class="right_content">
							<p class="right_content_title">「预订」从头开始学化妆 生活化妆学习</p>
							<p class="order_list_num">
								<span class="order_list_num_text">份数</span>
								<span class="order_list_num_num">1份</span>
							</p>
							<p class="order_list_price">
								<span class="order_list_num_text">总价</span>
								<span class="order_list_num_num">199元</span>
							</p>
						</div>
					</div>
				</div>
				<div>
					<p class="order_list_header">
						<span class="unpay">待支付</span>
						<span class="order_time">2017.06.08 10:00 ~ 2017.12.30 19:00</span>
					</p>
					<div class="order_list_content">
						<div class="left_icon">
							<img src="http://f.yhres.com/host/2017/06/08/1496903245107_479823.png-sq75h">
						</div>
						<div class="right_content">
							<p class="right_content_title">「预订」从头开始学化妆 生活化妆学习</p>
							<p class="order_list_num">
								<span class="order_list_num_text">份数</span>
								<span class="order_list_num_num">1份</span>
							</p>
							<p class="order_list_price">
								<span class="order_list_num_text">总价</span>
								<span class="order_list_num_num">199元</span>
							</p>
						</div>
					</div>
				</div>
				<div>暂无可使用订单</div>
				<div>暂无可退款订单</div>
			</div>
		</div>
		<order-footer></order-footer>
	</div>
</template>

<script type="text/javascript"> 
	import orderFooter from '../footer/footer'
	export default{
		name: 'Order',
		data () {
			return {
				currentIndex: ""
			}
		},
		methods: {
			goBack () {
				history.back()
			},
			backHome () {
				this.$router.push({
					path: '/food'
				})
			},
			showCurrent () {
				var divs = '.order_content>div';
				// console.log(divs);
				$(divs).hide(300).eq(this.currentIndex).show(200);
			},
			toOrder (index) {
				this.currentIndex = index
				console.log(this.currentIndex)
				this.showCurrent()
			}
		},
		components:{
			orderFooter
		}
	}
</script>

<style type="text/css">
	.order{
		padding-top: 45px;
	}
	.order_header{
		position: fixed;
		background: #fff;
		left: 0;
		top: 0;
		right: 0;
		z-index: 24;
		background: #fff;
		border-bottom: 1px solid #E5E5E5;
	}
	.orser_header_back{
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
	.orser_header_homePage{
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
	.orser_header_title{
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
	.order_type{
		display: flex;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #ebebeb;
		overflow: hidden;
		padding: 0;
		background: #fff;
	}
	.order_type li{
		width: 25%;
		height: 45px;
		line-height: 45px;
		color: #111;
		font-size: 15px;
		text-align: center;
	}
	.active{
		color: #d9a961!important;
		border-bottom: 2px solid #ff3800;
		position: relative;
	}
	.active:after{
		content: '';
		position: absolute;
	    display: block;
	    width: 100%;
	    height: 0;
	    bottom: 0;
	    /*left: 10%;*/
	    color: #ff3800;
	}
	.order_content{
		margin-top: 10px;
	}
	.order_content>div{
		display: none;
		background-color: #fff;
		border-bottom: 1px solid #ebebeb;
		border-top: 1px solid #ebebeb;
		font-size: 14px;
		text-align: center;
	}
	.order_content>div:first-child{
		display: block;
	}
	.order_list_header{
		height: 35px;
		line-height: 35px;
		padding: 0 15px;
		border-bottom: 1px solid #ebebeb;
	}
	.unpay{
		color: #f92;
		height: 35px;
		line-height: 35px;
	}
	.order_time{
		text-align: right;
		color: #999;
		width: 2.7rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		float: right;
	}
	.order_list_content{
		padding: 15px;
		position: relative;
		background-color: #fff;
		overflow: hidden;
		background: #fff;
	}
	.left_icon{
		position: relative;
		width: 90pt;
		height: 75px;
		float: left;
		overflow: hidden;
		margin-right: 10px;
		border-radius: 4px;
	}
	.left_icon img{
		border-radius: 4px;
		width: 100%;
	}
	.right_content_title{
		display: -webkit-box;
		overflow: hidden;
		text-align: left;
		line-height: 21px;
		margin-top: -3px;
		font-size: 15px;
	}
	.order_list_num{
		margin-top: 3px;
		text-align: left;
	}
	.order_list_num_text{
		color: #555;
	}
	.order_list_num_num{
		color: #111;
	}
</style>