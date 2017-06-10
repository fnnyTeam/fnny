<template>
	<div class="product">
		<div class="choose_content">		
			<a href="" v-for="item in chooseContentData">
				<div class="choose_shop">
					<span class="choose_reserve" v-if="item.productInfo.todayReserve">可定今日</span>
					<img :src="item.productInfo.picUrl" alt="">
					<div class="choose_shop_content">
						<h3 v-text="item.productInfo.hostName"></h3>
						<p><span v-text="item.productInfo.businessesDistrict"></span><span v-if="item.productInfo.cuisineStyle"> · </span><span v-text="item.productInfo.cuisineStyle"></span></p>
						<p class="product_special"><span v-text="item.productInfo.priceStr"></span></p>
						<p class="choose_tag"><span class="product_special" v-if="item.productInfo.vipEqsTag" v-text="item.productInfo.vipEqsTag"></span><span v-for="tag in item.productInfo.categorys" v-text="tag"></span><span v-text="item.productInfo.style"></span></p>
					</div>		
				</div>
			</a>
			
		</div>
	</div>
	
</template>
<script type="text/javascript">
	export default {
		name: 'product',
		data(){
			return{
				chooseContentData:[]
			}
		},
		props: ['cityId'],
		mounted(){
			this.axios.get('/api/api/m/search-v4.2?bizType=1&catalog=2&cityId='+ this.cityId +'&filter=2&mc=&page=1&pageSize=10&sort=1').then(res => {
				this.chooseContentData = res.data.data.searchData.doc
			},err =>{
				console.log(err)
			},'json')
			
		}
	}
</script>