<template>
  <div>
      <p>这是女儿页面</p>
      <button @click='submit'>给哥哥发消息</button>
        <p>哥哥会的消息:{{broMsg}}</p>
  </div>
</template>
<script>
export default {
  name:'daughter',
  data() {
      return{
          sisterMsg:'打完买点水果回来',
          broMsg:''
      }
  },
  created () {
     this.$root.bus.$on('ok',value=>{this.rev(value)}) 
  },
  methods: {
      submit(){
          this.$root.bus.$emit('buy',this.sisterMsg)
      },
      rev(value){
          this.broMsg = value
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
        float: right;
        background: pink;
        width:45%;
        margin: 10px;
        height: 400px;
    }
</style>

