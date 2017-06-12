<template>
	<div id="map_content">
		<div class="map_title">
			地图模式
			<span @click='goBack'></span>
		</div>
	</div>
</template>

<style type="text/css">
	#map_content{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		display: none;
	}
	.map_title{
		width: 100%;
		height: 35px;
		line-height: 35px;
		background: #f4f4f4;
		border-bottom: 1px solid #e1e1e1;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 101;
		text-align: center;
		color: #555;
		font-size: 14px;
	}
	.map_title>span{
		background: url(../../../static/imgs/play/header.png) no-repeat;
		background-size: 36px 18px;
		display: inline-block;
		width: 18px;
		height: 18px;
		position: absolute;
		top: 8px;
		left: 5px;
	}
</style>
<script type="text/javascript">
	export default{
		methods:{
			goBack(){
				history.back()
			},
		},
		data(){
			return{
				id: this.$route.query.id,
				playDetailData:[],
			}
		},
		created(){
			this.axios.get('api/api/m/event/item-v2.3/' + this.id +'?from=h5').then(res =>{
				this.playDetailData = res.data.data;
				// console.log(this.playDetailData.productAdvice);

			}) 
			
		},
		mounted(){
			// 创建地图实例
			var map = new AMap.Map('map_content',{
				zoom: 15,
				center:[121.498586,31.239637],
				resizeEnable: true
			});

			// 添加工具条、比例尺、定位、鹰眼控件
			AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
			    function(){
			        map.addControl(new AMap.ToolBar());	 // 工具栏

			        map.addControl(new AMap.Scale());	//比例尺   

			        map.addControl(new AMap.OverView({isOpen:true}));	//鹰眼
			});
			// 语言设置
			map.setLang('zh_cn');

			// 点击按钮获取地图
			AMap.event.addDomListener(document.querySelector('.playDetail_icon2'),"click",()=>{
					console.log(this.playDetailData)	
					$("#map_content").show();
					// 同时设置缩放比例及中心点
					map.setZoomAndCenter(16,[this.playDetailData.longitude,this.playDetailData.latitude]);
					var marker = new AMap.Marker({ //添加自定义点标记
				        map: map,
				        position: [this.playDetailData.longitude,this.playDetailData.latitude], //基点位置
				        offset: new AMap.Pixel(0, 0), //相对于基点的偏移位置
				        draggable: true,  //是否可拖动
				        // icon: new AMap.Icon({
				        // 	size: new AMap.Size(30,40),
				        // 	// images: "../images/map1.png"
				        // })  
					});
				})
		},
	}
</script>