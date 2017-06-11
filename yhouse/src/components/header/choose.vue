<template>
	<div class="choose">
		<div class="choose_fixed">
			<div class="choose_header">
				<a class="choose_back" v-on:click="back"></a>
				<ul>
					<router-link  tag="li" class="choose_tab" v-for="item in chooseHeaderData" v-text="item.name" @click="headChange" :to="'/choose/bizType'+item.value"></router-link>

				</ul>
				<a class="choose_search" href="/search"></a>		
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