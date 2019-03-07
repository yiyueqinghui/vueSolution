<template>
  <div id="animate">
    <h4>离开/进入的动画</h4>
    <table border="1" class="staticsInfo">
      <tr>
        <td>1,demo</td>
        <td>
          <button v-on:click="show = !show">
            Toggle
          </button>
        </td>
      </tr>
      <tr>
        <td>2,动画</td>
        <td>
          <button @click="show02 = !show02">welcome</button>
        </td>
      </tr>
      <tr>
        <td>3,css动画</td>
        <td>
          <button @click="show03 = !show03">animation动画</button>
        </td>
      </tr>
      <tr>
        <td>4,引用animate.css</td>
        <td>
          <button @click="show04 = !show04">animation动画</button>
        </td>
      </tr>
      <tr>
        <td>5,列表的进入、离开动画</td>
        <td><button @click="add">add</button> <button @click="remove">remove</button> </td>
      </tr>
    </table>
    <dl style="border-top: 1px solid #000000;">
      <dd>
        <transition name="fade">
          <p v-if="show">hello</p>
        </transition>
      </dd>
      <dd>
        <transition name="slide-fade">
          <p v-if="show02">welcome to here!</p>
        </transition>
      </dd>
      <dd>
        <transition name="animate-fade">
          <p v-if="show03"> animate css</p>
        </transition>
      </dd>
      <dd>
        <transition enter-active-class="animated flash"
                    leave-active-class="animated rotateOutDownLeft">
          <p v-if="show04">引入使用animate.css</p>
        </transition>
      </dd>
      <dd>
        <transition-group name="list" >
           <span v-for="(item,index) in randomArr" :key="item" class="random-item"> {{ item }}</span>
        </transition-group>
      </dd>
    </dl>


  </div>

</template>

<script>
    export default {
      data(){
        return {
          show:false,
          show02:false,
          show03:false,
          show04:false,
          randomArr:[1,2,3,4,5,6],
          addRandom:10

        }
      },
      methods:{
        randomIndex(){
          return parseInt(Math.random() * (this.randomArr.length))
        },
        add(){
          this.randomArr.splice(this.randomIndex(),0,this.addRandom++);
        },
        remove(){
          this.randomArr.splice(this.randomIndex(),1);
        }
      },
      mounted(){
        this.$nextTick(()=>{

        })
      }
    }
</script>

<style scoped>
  @import "../assets/css/animate.css";
  /*动画一*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  /*动画二*/
  .slide-fade-enter-active,.slide-fade-leave-active {
     transition:all 1s ease;
  }
  .slide-fade-enter,.slide-fade-leave-to{
    transform: translateX(100px) scale(1.5) skew(90deg);
  }
  /*animate css*/
  .animate-fade-enter-active{
    animation: bounce 1s;
  }
  .animate-fade-leave-active{
    animation: bounce 1s reverse;
  }
  @keyframes bounce {
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1.5);
    }
    100%{
      transform: scale(1);
    }
  }

  /*列表动画*/
  .random-item{
    display: inline-block;
    margin:20px;
  }
  .list-enter-active,.list-leave-active{
    transition:all 1s;
  }
  .list-enter,.list-leave-to{
    opacity:0;
    transform:translateY(100px) scale(2) skew(180deg);
  }




</style>
