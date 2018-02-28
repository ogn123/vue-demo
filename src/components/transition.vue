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
 		<button v-on:click="add">Add</button>
 		<transition-group name="list" tag="p">
		    <span v-for="item in items" v-bind:key="item" class="list-item">
		      {{ item }}
		    </span>
		</transition-group>
	</div>
</template>

<script>
export default {
  name:'abc',
  data () {
    return {
    	showBox: false,
    	datas:[1,2,3,4,5],
    	items: [1,2,3,4,5,6,7,8,9],
    	nextNum: 10
    }
  },
  methods:{
  	randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
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
 .list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>