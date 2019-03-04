<template>
	<div id="routes">
		<h4>参数如下</h4>
		<p>
			params参数{{$route.params}}
		</p>
		<p>
			query参数{{$route.query}}
		</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		mounted(){
			this.$nextTick(()=>{
				console.log(this.$route);
			})
		}
	}
</script>

<style>
</style>