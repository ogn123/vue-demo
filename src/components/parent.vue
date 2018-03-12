<template>
  <div>
      <div class="father">
          <p>这是父级页面</p> 
          告诉儿子：<span style="color:red">{{parentMsg}}</span>
          儿子回答：{{sonMsg}}
      </div>
      <son :sendparent='parentMsg' @connect='reciveSon' ></son>
      <daughter></daughter>
  </div>
</template>
<script>
import son from '../components/corrents/son'
import daughter from '../components/corrents/daughter'
export default {
  name:'corrent',
  data() {
      return{
          parentMsg:'今天要打球，传达给儿子',
          sonMsg:''
      }
  },
  created () {
      
  },
  methods: {
      reciveSon(msg){
          console.log(msg)
          this.sonMsg = msg.fn1
      }

  },
  computed: {
      
  },
  mounted () {
      
  },
  components: {
      son,daughter
  }
}
</script>
<style scoped>
    .father {
        width:100%;
        height:100px;
        background: wheat
    }
</style>

