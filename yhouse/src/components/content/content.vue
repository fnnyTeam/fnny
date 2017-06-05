<template>
  <div>
    <div class="tabbar">
      <router-link to='/content/food'>food</router-link>
      <router-link to='/content/life'>life</router-link>
      <router-link to='/content/play'>play</router-link>
      <router-link to='/content/spa'>spa</router-link>
    </div>
      <router-view></router-view>
      
  </div>
</template>

<script>

export default {
  name: 'content',
  
}
</script>

<style>

</style>
