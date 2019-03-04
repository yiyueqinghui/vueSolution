<template>
    <div class="part">
       <p>组件上传递过来的样式会绑定在相应组件的根目录上</p>
       <dl>
         <dd v-for="(val,key,index) in allData" :key="index" >{{key}}:{{val}}</dd>
       </dl>
    </div>
</template>

<script>
    export default {
      name: "test",
      props:['allData'],
      data(){
        return {

        }
      }
    }
</script>

<style scoped lang="less">
   .part{
     font-size: 16px;
   }
</style>
