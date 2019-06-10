<template>
  <div id="app">
      <one v-bind:products="products"></one>
      <two v-bind:products="products"></two>
    </div>


</template>


<script>
import zujian from './components/zujian'
import one from './components/one'
import two from './components/two'
export default {
    components:{
   'zujian' : zujian,
   'one': one,
   'two': two
  },
data () {
    return {
    //   products: [
    //     {name: '鼠标', price: 20},
    //     {name: '键盘', price: 40},
    //     {name: '耳机', price: 60},
    //     {name: '显示屏', price: 80}
    //   ]
    }
  }
}
</script>


<style>

</style>
