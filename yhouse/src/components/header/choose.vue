<template>
	<div class="choose">
		<div class="choose_fixed">
			<div class="choose_header">
				<a class="choose_back" v-on:click="back"></a>
				<ul>
					<router-link  tag="li" class="choose_tab" v-for="item in chooseHeaderData" v-text="item.name" @click="headChange" :to="'/choose/bizType'+item.value"></router-link>

				</ul>
				<a class="choose_search" href="/#/search"></a>
			</div>	
			<ul class="choose_filter_type">
				<!-- <li v-for="i in chooseHeaderData[urlParamValues].urlParamValues" v-text="i.name"></li> -->
				<li>全部</li>
				<li>分类筛选</li>
				<li>智能排序<span></span></li>
			</ul>
		</div>
		<div class="choose_absolute">
			<router-view :cityId="cityId"></router-view>	
			<div class="choose_more">
				查看更多
			</div>
			<div class="choose_bottom">
				
			</div>
		</div>
			
	</div>	
</template>
<style type="text/css">
	ul{
		padding: 0;
	}

	.choose{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
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
		/*height: 0.4rem;*/
		background: #fff;
		z-index: 20;
	}
	.choose_header{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-bottom: 0.009058rem solid #cdcdcd;
	}
	.choose_header ul{
		display: flex;

	}
	.choose_header ul li{
		width: 0.339946rem;
		line-height: 0.4rem;
		margin: 0 0.3rem;
		font-size: 0.16rem;
		color: #555;
	}
	.choose_header .router-link-active{
		font-weight: 700;
   	 	color: #111;
   	 	border-bottom: 0.02rem solid #000;
	}
	.choose_back{
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: .29rem;
		height: 100%;
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
		height: 100%;
	    background-image: url(../../../static/imgs/choose/search.png);
	    background-size: .18rem auto;
	    background-repeat: no-repeat;
   	 	background-position: center;
	}
	.choose_absolute{
		position: absolute;
		top: 0.8rem;
		left: 0;
		right: 0;
	}
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
<script type="text/javascript">
export default{
	name: 'choose',
	data(){
		return{
			chooseHeaderData: [],
			cityId: this.bus.cityId,
			chooseContentData: [],
			urlParamValues: 0,
			bizType: 2
		}
	},
	created(){
		// this.headChange();
	},
	mounted () {		
		this.axios.get('api/api/m/filter/list-v3.9/'+this.cityId).then(res => {
			this.chooseHeaderData = res.data.data.urlParamValues	

		},err =>{
			console.log(err)
		},'json')
	},
	methods: {
		back(){	
			this.$router.push({
				path:'/food'
			})	
		},
		headChange(){	
			if(event.currentTarget.innerHTML == '商户'){
				this.bizType = 2;
				this.urlParamValues = 0;
			}else if(event.currentTarget.innerHTML == '商品'){
				this.bizType = 1;
				this.urlParamValues = 1;
			}
			
		},
		chooseFilter(){

		},
		showDiv(){
			console.log('1')
		}
	}
}
</script>


