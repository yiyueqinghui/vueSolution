<template>
    <div id="container">
        <h4>绑定class</h4>
        <table border="1" class="staticsInfo">
          <tr>
            <td>1,class的对象语法</td>
            <td :class="{color:isColor,bg:isBg}">语法在此</td>
            <td :class="classObj">语法在此</td>
          </tr>
          <tr>
            <td>2,class的数组语法</td>
            <td :class="['color','bg']">数组语法</td>
            <td :class="isColor?'color':'bg'">三元表达式</td>
            <td :class="[isColor?'color':'bg','default']">数组形式的三元表达式</td>
            <td :class="[{color:isColor},'default']">数组中含对象的写法</td>
          </tr>
          <tr>
            <td>3,class用在组件上</td>
            <td>
              <my-part :class="{bg:true}" :allData="test"></my-part>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      <h4>绑定style</h4>
      <table border="1" class="staticsInfo">
        <tr>
          <td>1,style的对象语法</td>
          <td :style="styleObj">对象语法</td>
        </tr>
        <tr>
          <td>2,style的数组语法</td>
          <td :style="[styleObj,styleTwo]">数组语法</td>
          <td> 将多个样式对象应用到同一个元素上 </td>
        </tr>
      </table>
    </div>
</template>

<script>
  import Part from './common/test';
  export default {
    data(){
      return {
         isColor:true,
         isBg:false,
         classObj:{
            color:true,
            bg:true
         },
         test:{
           name:'cj',
           age:11
         },
         styleObj:{
           fontFamily:'黑体',
           color:'blue'
         },
         styleTwo:{
           fontWeight:'bold'
         }
      }
    },
    components:{
      'my-part':Part
    }

  }
</script>

<style scoped lang="less">
  .color{
    color:red;
  }
  .bg{
    background-color:#dddddd;
  }
  .default{
    font-weight: 600;
  }
</style>
