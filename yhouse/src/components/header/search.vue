<template>
	<section class="search">
		<div class="search_list" v-for='item in data'>
			<!-- <i :style="backgroundImage:url({{ item[0].icon }})"></i> -->
			<ol class="search_item">
				<li v-for='key,index in item.itemList'>{{ item.itemList[index] }}</li>
			
			</ol>
		</div>
	</section>	
</template>

<script type="text/javascript">
export default{
	name: 'search',
	data(){
		return {
			data:[]
		}
	},
	created(){
		this.axios.get('static/data/data/search/headerSearch.json').then(res => {
			this.data = res.data[0].data
			console.log(this.data)
		})
	}
}

</script>


<style type="text/css">
	.search_list{
		height: .4rem;
		line-height: .4rem;
	    padding-left: .42rem;
	    border-bottom: 1px solid #eee;
	    background: #fff;
	}
	.search_item{
		width: 100%;
		display: flex;
	}
	.search_item>li{
		width: 33.33%;
		border-left: 1px solid #eee;
	    font-size: .14rem;
	    color: #111;
	    text-align: center;
	}
</style>