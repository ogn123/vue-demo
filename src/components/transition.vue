<template>
	<div>
		<button @click="showBox = !showBox" class="btn">切换</button>
	    <div class="container">
	        <div class="box"></div>
	    </div>
	    <transition name="box">
		    <div v-show="showBox" class="box">
		        i am the box
		    </div>
 		</transition>
	</div>
</template>

<script>
export default {
  name:'abc',
  data () {
    return {
    	showBox: false
    }
  }
}
</script>

<style lang="css" scoped>
.box{
    width:100%;
    height:100%;
    text-align: center;
    line-height: 200px;
    background: #ff8282;
    color: #Fff;
    /*以下两个默认值，可不写*/
    /*写上只是为了便于讲解，记住这两个*/
    opacity: 1;
    margin-left: 0;
 }
 .box-enter-active,.box-leave-active{
    transition: all .8s;
 }
 .box-enter{
    opacity: 0;
    margin-left: 100%;
 }
 .box-leave-active{
    opacity: 0;
    margin-left: 100%;
 }
</style>