<template>
  <div id="app">
    <!-- <div class="header">
      <router-link to='/content'>content</router-link>

      <router-link to='/city'>city</router-link>
      <router-link to='/search'>search</router-link>
      <router-link to='/choose'>choose</router-link>
    </div>
      <router-view></router-view>  -->
    <headerdiv></headerdiv>
    <contentdiv></contentdiv> 
     
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Headerdiv from './components/header/header'
import Contentdiv from './components/content/content'
export default {
  name: 'app',
  components:{
    Contentdiv,Headerdiv
  }

  
}
</script>

<style>
#app {
  
}
</style>
