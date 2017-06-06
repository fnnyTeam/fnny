<template>
	<div id="jxTheme">
		<div class="jxTheme_list">
			<h2>精选推荐专题</h2>
			<p>小编为你整理的品质好店</p>
			<div class="jxTheme_pic" v-for="item in data">
				<div class="jxTheme_pic_icon">
					<img :src="item.picUrl">
				</div>
				<div class="jxTheme_pic_content">
					<h2 class='jxTheme_position'>{{ item.title }}</h2>
					<p class='jxTheme_position'>{{ item.viceTitle }}</p>
					<span class='jxTheme_position'>{{ item.contentsNumStr }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default{
	name: 'jxTheme',
	data () {
		return {
			data: []
		}
	},
	created () {
		this.axios.get('./static/data/food/shopList.json')
		.then(res=>{
			//console.log(res.data.data.doc[2].itemData);
			this.data = res.data.data.doc[2].itemData
		},err=>{
			console.log(err);
		})
	},
}
</script>

<style type="text/css">
	html{
		font-size: 110.4px;
	}
	body{
		font-size: .12rem;
	}
	*{
		padding: 0;
		margin: 0;
	}

	#jxTheme .jxTheme_pic{
		position: relative;
		margin-bottom: .15rem;
		overflow: hidden;
    	padding: 0 .15rem;
    	box-sizing: border-box;
    	outline-style: none!important;
	}

	#jxTheme .jxTheme_pic_icon{
		font-size: 0;
		width: 100%;
	}
	#jxTheme .jxTheme_list>h2{
		width: 100%;
		text-align: center;
		font-weight: normal;
		color: #111;
	    font-size: .17rem;
	    line-height: .25rem;
	    padding-top: .2rem;
	}
	#jxTheme .jxTheme_list>p{
		width: 100%;
		text-align: center;
		color: #555;
	    font-size: .12rem;
	    height: .2rem;
	    line-height: .2rem;
	    margin-bottom: .11rem;
	}
	#jxTheme .jxTheme_pic_icon img{
		display: block;
	    width: 100%;
	    height: 1.5rem;
	}
	#jxTheme .jxTheme_pic_content{
		position: absolute;
		color: #fff;
		top: 0;
		left: 0;
		width: 100%;
	} 
	#jxTheme .jxTheme_pic_content>h2{
		width: 90%;
	    top: .18rem;
	    font-size: .2rem;
	    font-weight: 700;
	    line-height: .28rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	#jxTheme .jxTheme_pic_content>p{
		width: 90%;
	    top: .45rem;
	    font-size: .14rem;
	    line-height: .22rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	#jxTheme .jxTheme_pic_content>span{
		color: #fff;
	    top: .75rem;
	    padding-right: .09rem;
	    font-size: .12rem;
	    line-height: .16rem;
	    background: url(http://m.yhouse.com/img/spring_guide_arrow_2017.png) right center no-repeat;
	    background-size: .06rem auto;
	}
	.jxTheme_position{
		position: absolute;
		left: .3rem;
	}
</style>


