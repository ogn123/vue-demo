<template>
  <div id="app">
    <div>
      <router-link to='/vue'>列表</router-link>
      <router-link to='/transitioner'>过渡动画</router-link>
      <router-link to='/counter'>vuex的计数</router-link>
      <router-link to="/shopcart">购物车demo</router-link>
      <router-link to='/corrent'>通信</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
