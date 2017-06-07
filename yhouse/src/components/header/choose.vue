<template>
	<div class="choose">
		<div class="choose_fixed">
			<div class="choose_header">
				<a href="" class="choose_back"></a>
				<ul>
					<li v-for="item in chooseHeaderData" v-text="item.name"></li>
				</ul>
				<a href="" class="choose_search"></a>		
			</div>
			<div class="choose_filter">
				<ul>
					<li>全部</li>
					<li>分类筛选</li>
					<li>智能排序<span></span></li>
				</ul>
			</div>
			
		</div>
		
		<div class="choose_content">
			<a href="">
				<div class="choose_shop">
					<img src="http://p.yhres.com/hostInfo/2017/05/29/1496054458677674.jpg-rq75h" alt="">
					<div class="choose_shop_content">
						<h3>柯来乐colala酒窖</h3>
						<p>北京欢乐谷<span> · </span>西餐</p>
						<p>人均939元</p>
					</div>		
				</div>
			</a>
		</div>
	</div>	
</template>
<style type="text/css">
	.choose{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0.09058rem;
		background: #fff;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.choose_fixed{
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 0.8rem;
	}
	.choose_header{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 50%;
		border-bottom: 0.009058rem solid #cdcdcd;
	}
	.choose_header ul{
		display: flex;

	}
	.choose_header ul li{
		width: 0.339946rem;
		line-height: 0.4rem;
		padding: 0 0.3rem;
		font-size: 0.16rem;
		color: #555;
	}
	.choose_back{
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: .29rem;
		height: 50%;
	    background-image: url(../../../static/imgs/choose/back.png);
	    background-size: .07rem auto;
	    background-position: center;
	    background-repeat: no-repeat;
	}
	.choose_search{
		position: absolute;
		top: 0;
		right: 0;
		width: .4rem;
		height: 50%;
	    background-image: url(../../../static/imgs/choose/search.png);
	    background-size: .18rem auto;
	    background-repeat: no-repeat;
   	 	background-position: center;
	}
	.choose_filter{
		display: flex;
		width: 100%;
		height: 50%;
		border-bottom: 1px solid #ddd;
	}
	.choose_filter ul{
		display: flex;
		width: 100%;
		height: 100%;

	}
	.choose_filter ul li{
		position: relative;
		flex: 1;
		line-height: 0.4rem;
		text-align: center;
		color: #999;
	}
	.choose_filter ul li:last-of-type{
	   
	    background-image: url(../../../static/imgs/choose/arrows_down.png);
	    background-size: .1rem auto;
	    background-repeat: no-repeat;
	    background-position: 0.85rem center;
	}
	.choose_filter ul li:not(:last-child):after{
		position: absolute;
	    right: 0;
	    top: .12rem;
	    width: 1px;
	    display: block;
	    content: "";
	    height: .21rem;
	    background-color: #ddd;
	}
	.choose_content{
		position: absolute;
		top: 0.8rem;
		left: 0;
		right: 0;
		padding: 0 0.15rem;

	}
	.choose_shop{
		display: flex;
		width: 100%;
		height: 1.2rem;
		padding: 0.15rem 0;
		border-bottom: 1px solid #ddd;
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
</style>
<script type="text/javascript">
export default{
	name: 'choose',
	data(){
		return{
			chooseHeaderData: [],
			// chooseFilterData: [],
		}
	},
	created () {
		this.axios.get('static/data/data/choose/merchantList.json').then(res => {
			this.chooseHeaderData = res.data.data.urlParamValues
			// this.chooseFilterData = res.data.data.urlParamValues
			console.log(this.chooseHeaderData)
			// console.log(this.chooseFilterData)
			
		},err =>{
			console.log(err)
		},'json')
		
	}
}

</script>