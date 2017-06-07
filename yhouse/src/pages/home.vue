<template>
	 <div class="home">
      <div class="header">
        <div class="headerTop">
          <router-link to='/city' class="headerCity" tag="div">{{thiscity}} <span></span></router-link>
          <router-link to='/search' class="search" tag="div">
            <input id="searchInput" type="text" placeholder="请输入商家、商圈、菜系、活动">
          </router-link>
          <router-link to='/choose' class="headerChoose" tag="div">筛选<span></span></router-link>
        </div>
        <div class="tabbar">
          <router-link to='/food' tag="div"><span>美食</span></router-link>
          <router-link to='/play' tag="div"><span>玩乐</span></router-link>
          <router-link to='/life' tag="div"><span>夜生活</span></router-link>
          <router-link to='/spa' tag="div"><span>美容</span>/SPA</router-link>    
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
	 export default {
	   name: 'home',
     data(){
          return {
            thiscity:"北京"
          }
     }
	 }
</script>
<style>
.header{
  background-color: white;
  font-family: 微软雅黑,microsoft yahei;
}
.headerTop{
  width: 100%;
  height: 0.42rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}
.search{
  width: 65%;
  height: 60%;
}
#searchInput{
  width: 100%;
  height: 90%;
  text-indent: .2rem;
  outline-style: none;
  border: 1px solid #bbb;
  border-radius: .23rem;
}
.headerCity{
  width: 15%;
  font-size: .13rem;
}
.headerCity span{
  display: inline-block;
  width: .1rem;
  height: .1rem;
  background: url(https://m.yhouse.com/img/icons/homepage_icon_arrow_down@2x.png?v4.3) no-repeat center center;
  background-size: 100% 60%;
}
.headerChoose{
  width: 15%;
  font-size: .13rem;
}
.headerChoose span{
  display: inline-block;
  width: .1rem;
  height: .1rem;
  background: url(https://m.yhouse.com/img/icons/homepage_icon_arrow@2x.png?v4.3) no-repeat center center;
  background-size: 60% 100%;
}
.tabbar{
  width: 100%;
  height: 0.27rem;
  font-size: .13rem;
  display: flex;
  justify-content: space-around;
}
.tabbar div{
  width:100%;
  text-align: center;
  line-height: .27rem;
}
</style>