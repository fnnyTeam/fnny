<template>
	<div class="food">
		<!-- <swiper></swiper> -->
		<h1>food</h1>
		<jx-theme></jx-theme>
		<shopList></shopList>
	</div>	
</template>

<script type="text/javascript">


import jxTheme from '../../components/jxTheme/jxTheme'
import shopList from '../../components/shopList/shopList'

export default{
	name: 'food',

	components: {
		jxTheme, shopList
	}

}

</script>

<style type="text/css">

</style>


