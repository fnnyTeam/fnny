<template>
	<div class="shop">
		<!-- <div class="choose_filter_div">	
			<ul class="choose_filter_condition" >
				<li class="choose_filter_st">
					<ul class="choose_filter_st_left">
						<li>全部</li>
					</ul>
					<ul class="choose_filter_st_right">
						<li>全部不</li>
						
					</ul>
				</li>
				<li class="choose_filter_nd">
					<ul class="choose_filter_st_left">
						<li>全部</li>
					</ul>
					
				</li>
				<li class="choose_filter_rd">
					<ul class="choose_filter_st_left">
						<li>全部</li>
					</ul>
					
				</li>
			</ul>
		</div>  -->
			
		<div class="choose_content">		
			<a  v-for="item in chooseContentData">
				<div class="choose_shop">
					<span class="choose_reserve" v-if="item.productInfo.todayReserve">可定今日</span>
					<img :src="item.productInfo.picUrl" alt="">
					<div class="choose_shop_content">
						<h3 v-text="item.productInfo.hostName"></h3>
						<p><span v-text="item.productInfo.businessesDistrict"></span><span v-if="item.productInfo.cuisineStyle"> · </span><span v-text="item.productInfo.cuisineStyle"></span></p>
						<p>人均：<span v-text="item.productInfo.priceStr"></span></p>
					</div>		
				</div>
			</a>
			
		</div>
	</div>
	
</template>
<script type="text/javascript">
	export default {
		name: 'shop',
		data(){
			return{
				chooseContentData:[]
			}
		},
		props: ['cityId'],
		mounted(){

			this.axios.get('/api/api/m/search-v4.2?bizType=2&catalog=31&cityId='+ this.cityId +'&filter=2&mc=&page=1&pageSize=10&sort=1').then(res => {
				this.chooseContentData = res.data.data.searchData.doc		
				// console.log(this.chooseContentData)		
			},err =>{
				console.log(err)
			},'json')
		}
	}
</script>
