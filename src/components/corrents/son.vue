<template>
  <div>
      <p>这是儿子页面</p> 
      <p>parent发来的消息：<span style="color:red">{{sendparent}}</span></p>
      <button @click='sonsend'>给爸爸回消息</button>
      <p>妹妹发来的消息：{{sisterMsg}}</p>
        <button @click='sendSiter'>给妹妹回消息</button>
  </div>
</template>
<script>
export default {
  name:'son',
  data() {
      return{
          sonMsg:'收到，那您准备收拾东西',
          sisterMsg:'',
          brotherMsg:'知道了'
      }
  },
  props:['sendparent'],
  created () {
      this.$root.bus.$on('buy',value=>{this.rev(value)})
  },
  methods: {
      sonsend(){
          let obj = {
              fn1:this.sonMsg,
              fn2:'哈哈哈'
          }
          this.$emit('connect',obj)
      },
      rev(value){
          this.sisterMsg = value
      },
      sendSiter(){
          this.$root.bus.$emit('ok',this.brotherMsg)
      }
  },
  computed: {
      
  },
  mounted () {
      
  }
}
</script>
<style scoped>
    div{
        float: left;
        background: yellowgreen;
        width:45%;
        margin: 10px;
        height: 400px;
    }
</style>

