<template>
	<div>
    <div>
				<input type="text" v-model="inputvalue">
				<button @click="handclick">提交</button>
				<ul>
					<todo-item v-for="(item ,index) of list" :key="index"
					 :content="item" @delete="handdelete"></todo-item>
				</ul>
    </div>
</div>
</template>
<script>
	import TodoItem from './components/TodoItem'
	export default{
		components:{
			'todo-item':TodoItem
		},
		data:function (){
			return{
				inputvalue:'',
				list:[
					
				]
			}
		},
		methods:{
			handclick: function(){
				this.list.push(this.inputvalue)
				inputvalue:''
			},
			handdelete(index){
				this.list.splice(index,1)
			}
		}
	}
	
</script>

<style>




</style>
