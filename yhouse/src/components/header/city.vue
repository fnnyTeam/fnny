<template>
	<div class="city">
		<div class="cityHeader">
			<div @click="back"></div>
			<p>选择城市</p>
		</div>
		<div class="thisCity"><span>当前城市</span>：{{currentcity}}</div>
		<div class="cityGroup" v-for="(cityId,group) in citygroup">
			<p>{{group}}</p>
			<ul class="groupBox">
				<li v-for="key in cityId"   @click="changecity(key)">{{ citys[key].name }}</li>
			</ul>
		</div>
	</div>	
</template>

<script type="text/javascript">
export default{
	name: 'city',
    data(){
        return {
          currentcity:this.bus.currentIndex.city,
          citygroup:[],
          citys:[]
        };
    },
    created(){
        this.axios.get('static/data/data/city/city.json').then(res =>{
        
           	this.citygroup = res.data.cityGroup;
           	this.citys = res.data.city;
       		// console.log(res.data.city);
        },err =>{
            console.log(err)
        },'json');
    },
    methods:{
     	back(){
     		history.back()
     	},
     	changecity(key){	
     		this.bus.currentIndex.city =  event.target.innerHTML;
     		this.bus.cityId = key;
     		// console.log(this.bus.cityId);
     		// history.back();
     	}
    }
}
</script>
<style>	
.city{
	width: 100%;
	height: auto;
	font-size: .13rem;
}
.cityHeader{
	width: 100%;
	height: 0.4rem;
	line-height: .4rem;
	background-color: #fff;
	border-bottom: 1px solid #e1e1e1;
}
.cityHeader div{
	width: .35rem;
	height: .4rem;
	background: url(https://m.yhouse.com/img/icons/icon_home@3x.png?v4.3)no-repeat .1rem -.1rem;
	background-size: .22rem auto;
	position:absolute;
	left: 10px;
}
.cityHeader p{
	text-align: center;
}
.thisCity{
	height:0.43rem;
	margin-top: .15rem;
	background-color: white;
	line-height: .43rem;
	text-indent: .1rem;
}
.thisCity span{
	color: #bbb;
}
.cityGroup{
	padding: 0 .11rem;
	margin-top: .1rem;
}
.cityGroup p{
	color: #adadad;
}
.cityGroup ul{
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	font-size: .13rem;
	margin-bottom: .2rem;
}
.cityGroup li{
	width: 32%;
	background-color: white;
	border: 1px solid #ccc;
	padding: .06rem 0;
	margin: .06rem 0;
	margin-right: 1%;
}
.cityGroup li:nth-of-type(3n){
	margin-right: 0;
}
</style>