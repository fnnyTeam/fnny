<template>
	<div id="footer">
		<div class="footerContaner">
			<p class="footerContaner_content">
				<a href="" @click="goHome()">首页</a>
				<span>|</span>
				<a href="order">订单</a>
				<span>|</span>
				<a href="">登录</a>
			</p>
			<div class="footerContaner_icon">
				<img src="http://m.yhouse.com/img/icons/icon_apple@2x.png?v4.3" id="ios">
				<img src="http://m.yhouse.com/img/icons/icon_android@2x.png?v4.3" id="android">
			</div>
			<p class="footerContaner_about">关于我们</p>
			<span class="footerContaner_copyright">Copyright YHOUSE mobile</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'footer',
		methods: {
			goHome () {
				this.$router.push({
					path:'/food'
				})
			}
		}
	}
</script>

<style type="text/css">
	#footer{
		width: 100%;
		text-align: center;
		padding: .25rem 0;
		font-size: .14rem;
		color: #999;
	}
	#footer .footerContaner_content a{
		display: inline-block;
		width: 20%;
	}
	#footer .footerContaner_icon{
		width: 2.84rem;
	    overflow: hidden;
	    margin: .15rem auto .3rem;
	    display: flex;
	    justify-content: space-around;
	}
	#footer .footerContaner_icon img{
		width: 1.32rem;
		height: .4rem;
	}
	#footer .footerContaner_about{
		color: #555;	
	}
	#footer .footerContaner_copyright{
		color: #ccc;
		font-size: .1rem;
	}
</style>

