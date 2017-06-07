<template>
	<div id="play">
		<!-- <h1>{{  data }}</h1> -->
		<div class="play_container">
			<!-- 时下最流行 时尚大作战 -->
			<div class="play_grids">
				<a href="" v-for='item in data'>
					<img :src="item.picUrl">
				</a>
				
			</div>
			
		</div>
	</div>	
</template>

<style type="text/css">
	body{
		font-size: .12rem;
	}
	.play_grids{
		width: 100%;
		height: 1.557rem;
		margin-bottom: .15rem;
		display: flex;
	}
	.play_grids>a{
		width: 50%;
		border-radius: 4px;
		padding: 0 .045rem;
	}
	.play_grids>a:first-child{
			padding-right: 0;
	}
	.play_grids>a>img{
		width: 1.63rem;
		height: 1.54rem;

	}
</style>


<script type="text/javascript">
export default{
	name: 'play',
	data(){
		return {
			data: []
		}
	},
	created(){
		this.axios.get('static/data/data/play/playShopList.json').then(res => {
			this.data = res.data.data.doc[1].itemData[0].content
			// console.log(this.data)
		},err =>{
			console.log(err)
		},'json')

	}
}










</script>



