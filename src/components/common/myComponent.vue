<template>
    <div id="my-component" :style="{fontSize:data.font+'px'}">
      <h4>{{data.title}}</h4>
      <slot></slot>
      <p>{{data.date}}<button @click="enlarge">放大字体</button></p>
    </div>
</template>

<script>
    export default {
      props:['data'],
      data(){
        return {

        }
      },
      methods:{
        enlarge(){
          this.$emit('larger',[16]);
          console.log('触发自定义的larger事件')
        }
      }
    }
</script>

<style scoped>
  h4,p{
     margin: 0;
     padding: 0;
   }
</style>
