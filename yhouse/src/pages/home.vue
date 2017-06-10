<template>
	 <div class="home" @scroll="hmScrollFn($event)">
        <transition name="headerMove">
        <div class="header">
          <div class="headerTop">
            <router-link to='/city' class="headerCity" tag="div">
            {{currentcity}} <span ></span></router-link>
            <router-link to='/search' class="search" tag="div">
              <input id="searchInput" type="text" placeholder="请输入商家、商圈、菜系、活动">
            </router-link>
            <router-link to='/choose' class="headerChoose" tag="div">筛选<span></span></router-link>
          </div> 
          <div class="tabbar">
            <router-link to='/food' tag="div" ><span @click="styleFn(1)">美食</span></router-link>
            <router-link to='/play' tag="div" ><span @click="styleFn(2)">玩乐</span></router-link>
            <router-link to='/life' tag="div" ><span @click="styleFn(3)">夜生活</span></router-link>
            <router-link to='/spa'  tag="div" ><span @click="styleFn(4)">美容/SPA</span></router-link>
            <div class="navDivstyle" :style="changeNavStyle"></div>
          </div>
        </div>
        </transition>
        <router-view class="homeMain"></router-view>
  </div>
</template>

<script>
	 export default {
     name: 'home',
     data(){
        return {
          currentcity: this.bus.currentIndex.city,
          changeNavStyle:{},
          routerId:this.bus.routerId,
          scrollFlag:false,
          scrollNum:0,
          scrollTop:0,
          timeFn:'',
        }
     },
     created(){     
        this.navStyleFn();
        var timeFn1=1,timeFn2;
     },
     watch:{
          scrollFlag:function(e){
              if(e){
                this.hmHeaderUp();
              }else{                
                this.hmHeaderDown();
              }
          }
     },
     methods:{
        styleFn(nav){
            this.bus.routerId = nav;
            this.navStyleFn();
            // console.log(this.bus.routerId)
        },
        hmScrollFn(ve){
            if($('.home').scrollTop() > 90){
                if($('.home').scrollTop() > this.scrollTop){
                    this.scrollFlag = true;
                }else{
                    this.scrollFlag = false;                  
                }
            };
            this.scrollTop = $('.home').scrollTop();        
        },
        hmHeaderUp(){
            $('.header').css("top",this.scrollNum + "px");
            if(this.scrollNum > -50){
                this.scrollNum--;
                clearTimeout(this.timeFn);
                this.timeFn = setTimeout(this.hmHeaderUp,1000/60);
            }
        },
        hmHeaderDown(){
            $('.header').css("top",this.scrollNum + "px");
            if(this.scrollNum < 0){
                this.scrollNum++;
                clearTimeout(this.timeFn);
                this.timeFn = setTimeout(this.hmHeaderDown,1000/60);                
            }else{
              this.scrollNum = 0;
            }
        },
        navStyleFn(){
          switch(this.bus.routerId){
            case 1 :          
              this.changeNavStyle = {'left': '0.32rem'};
              break;
            case 2 :          
              this.changeNavStyle = {'left': '1.17rem'};
              break;
            case 3 :         
              this.changeNavStyle = {'left': '2.05rem'};
              break;
            case 4 :          
              this.changeNavStyle = {'left': '2.9rem'};
              break;
          };
        }
     }
	 }
</script>
<style>
.home{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: scroll;
}
.homeMain{
  margin-top: .75rem;
}
::-webkit-scrollbar
{
  display: none;
} 
.tabbar .router-link-active{
  color:red;
}
.tabbar .navDivstyle{
  width: .18rem;
  height: 0;
  border-bottom: 2px solid red;
  position: absolute;
  left: .32rem;
  top:.65rem;
}
.header{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  font-family: 微软雅黑,microsoft yahei;
  margin-bottom: .06rem;
  z-index: 100;
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
  width: 18%;
  white-space: nowrap;
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
.tabbar span{
  display: block;
}
</style>