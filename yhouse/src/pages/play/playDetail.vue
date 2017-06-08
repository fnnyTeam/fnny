<template>
	<div>
		<h1>playDetail</h1>
		<p>{{ id }}</p>
		<p>{{ id }}</p>
		
	</div>
	
</template>


<script type="text/javascript">
	export default{

		data(){
			return{
				id: this.$route.query
			}
		},
		created(){
			console.log(this.id)
		}
	}

</script>