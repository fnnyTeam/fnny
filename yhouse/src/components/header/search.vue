<template>
	<div class="search">
		<section class="search_list" v-for='item in searchData'>
			<!-- <i style="backgroundImage:url(bgUrl);background-size: 50% auto;" class="search_icon"></i> -->
			<i class="search_icon"><img :src="item.icon"></i>
			<ol class="search_item">
				<li v-for='key,index in item.itemList'>{{ item.itemList[index] }}</li>
			
			</ol>
			
		</section>
		<section class="search_history">
			<h3>搜索历史</h3>
			<ul>
				<li>
					<span>「GRL PARTY」 </span>
					<i></i>
				</li>
			</ul>
		</section>
	</div>	
</template>

<script type="text/javascript">
export default{
	name: 'search',
	data(){
		return {
			searchData:[],
			bgUrl:[]
		}
	},
	created(){
		this.axios.get('static/data/data/search/headerSearch.json').then(res => {
			this.searchData = res.data[0].data
			console.log(this.searchData)
			// this.bgUrl = res.data[0].data[0].icon
			// this.bgUrl = res.data[0].data
			console.log(bgUrl)
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
	    position: relative;
	}
	.search_icon{
		position: absolute;
	    left: 0;
	    top: 5px;
	    display: block;
	    width: .42rem;
	    height: .4rem;
	    text-align: center;
	    background-repeat: no-repeat;
	    background-position: center;
	}
	.search_icon>img{
		width: 0.18rem;
		height: 0.18rem;
	}
	.search_item{
		width: 100%;
		display: flex;
	}
	.search_item>li{
		width: 33.33%;
		border-left: 1px solid #eee;
	    font-size: .13rem;
	    color: #111;
	    text-align: center;
	}
	.search_history>h3{
		color: #999;
	    padding-top: .19rem;
	    padding-left: .15rem;
	    line-height: .34rem;
	    font-size: .14rem;
	    font-weight: normal;
	}
	.search_history>ul{
		border-top: 1px solid #e1e1e1;
	    border-bottom: 1px solid #e1e1e1;
	    background-color: #fff;
	    padding-left: .15rem;
	}
	.search_history>ul>li{
		position: relative;
	    border-bottom: 1px solid #ebebeb;
	    height: .41rem;
	    line-height: .41rem;
	    padding-left: .22rem;
	    background: url(../../../static/imgs/search/icon_search.png) .02rem center no-repeat;
	    background-size: .14rem auto;
	    color: #111;
	    font-family: '微软雅黑';
	}
	.search_history>ul>li>i{
		display: block;
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: .41rem;
	    height: .41rem;
	    background: url(../../../static/imgs/search/icon_close.png) center center no-repeat;
	    background-size: .14rem auto;
	}
</style>