<template>
	<div class="city">
		<div class="cityHeader">
			<div></div>
			<p>选择城市</p>
		</div>
		<div class="thisCity"><span>当前城市：</span>北京</div>
		<div class="cityGroup" v-for="(cityId,group) in citygroup">
			<p>{{group}}</p>
			<ul class="groupBox">
				<li v-for="key in cityId">{{ citys[key].name }}</li>
			</ul>
		</div>
	</div>	
</template>

<script type="text/javascript">
export default{
	name: 'city',
     data(){
        return {
          citygroup:[],
          citys:[]
        };
     },
     created(){
        this.axios.get('static/data/data/city/city.json').then(res =>{
        
           	this.citygroup = res.data.cityGroup;
           	this.citys = res.data.city;
        console.log(res.data.city);
        },err =>{
            console.log(err)
        },'json')
     }
}

</script>
<style>
	.city{
		width: 100%;
		height: auto;
	}
	.cityHeader{
		width: 100%;
		height: .44rem;
    	line-height: .44rem;
    	background-color: #fff;
    	border-bottom: 1px solid #e1e1e1;
	}
	.cityHeader div{

	}
	.cityHeader p{

	}
</style>