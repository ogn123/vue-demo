<template>
  <div style="padding-top:50px">
    <h1>购物车demo</h1>
    <!-- 商品的列表 -->
    <product></product>
    <!-- 购物车的列表 -->
    <cart></cart>
    <!-- 小记 -->
    <info></info>
  </div>
</template>
<script>
import cart from '../components/shopCart/cart'
import info from '../components/shopCart/info'
import product from '../components/shopCart/product'
export default {
  components: {
      cart,
      info,
      product
  }
}
</script>
<style>
</style>


