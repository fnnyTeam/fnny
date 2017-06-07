<template>
  <div id="app">
  	 <div class="header">
        <router-link to='/city'>city</router-link>
        <router-link to='/search'>search</router-link>
        <router-link to='/choose'>choose</router-link>
        <div class="tabbar">
          <router-link to='/food'>food</router-link>
          <router-link to='/life'>life</router-link>
          <router-link to='/play'>play</router-link>
          <router-link to='/spa'>spa</router-link>    
        </div>
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

	
</style>