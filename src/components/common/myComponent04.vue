<template>
    <div id="test">
      {{name}}-{{age}}
      <input type="text" v-model="person.reName" placeholder="修改名字"/>
      <input type="number" v-model.number="person.reAge" placeholder="修改年龄"/>
      <p>父子组件双向数据绑定：https://www.jb51.net/article/142099.htm</p>
    </div>
</template>

<script>
    export default {
      props:['name','age'],
      data(){
        return {
           person:{
             reName:'',
             reAge:''
           }
        }
      },
      watch:{
        // 深度监控参考 https://blog.csdn.net/adenfeng/article/details/80372023
        person:{
          //深度监控
          handler(newVal,oldVal){
            console.log(newVal);
            this.$emit('update:name',newVal.reName);
            this.$emit('update:age',newVal.reAge);
          },
          deep:true
        }
      }
    }
</script>

<style scoped>

</style>
