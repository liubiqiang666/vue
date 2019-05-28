<template>
  <li @click="handdelete">{{content}}</li>
</template>

<script>
	export default{
		props:['content','index'],
		methods:{
			handdelete:function(){
				this.$emit('delete',this.index)
			}
		}
	}
</script>


<style scoped>

</style>
