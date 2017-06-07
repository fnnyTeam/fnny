<template>
    <div id="app">
      	<div class="header">
            <div class="header_nav">
                <router-link to='/city'>city</router-link>
                <router-link to='/search'>search</router-link>
                <router-link to='/choose'>choose</router-link>
            </div>
            <ul class="tabbar">
                <li>
                    <router-link to='/food'>美食</router-link>
                </li>
                 <li>
                    <router-link to='/life'>玩乐</router-link>
                </li>
                 <li>
                    <router-link to='/play'>夜生活</router-link>
                </li>
                 <li>
                    <router-link to='/spa'>美容/spa</router-link>
                </li>
                    
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
	 	name: 'home'
	}
</script>
<style>
.header_nav{
    height: .42rem;
}
.tabbar{
    width: 100%;
    height: .25rem;
    line-height: .25rem;
    background: #fff;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
}
.tabbar>li>a{
    font-size: .12rem;
    color: #111;
    font-family: NotoSansHans-Regular;
}

	
</style>