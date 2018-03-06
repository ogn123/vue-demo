<template>
  <div class="product">

    <h4>商品信息</h4>
    <table class="table table-hover table-bordered">
      <thead class="tables">
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(shop,index) in shoplist' :key="index">
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.price}}</td>
          <td>
            <div @click='addToCart(shop)' class="btn btn-info">购物车</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters,mapActions } from "vuex"
export default {
  data(){
      return {
          
      }
  },
  computed: {
    ...mapGetters(['shoplist'])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>



<style>
  .product th,.product td {
    text-align: center !important;
  }

  .item-wrapper {
    display: flex;
    background-color: #dfdfdf;
    align-items: center;
    justify-content: center;
  }

  .item {
    flex: 1;
  }
</style>