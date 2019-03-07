<template>
    <div id="customied-order">
       <h4>自定义指令</h4>
       <table border="1" class="staticsInfo">
         <tr>
           <td>1,自定义指令</td>
           <td>自定义自动聚焦命令 </td>
           <td> <input type="text" v-focus  /> </td>
         </tr>
       </table>
    </div>
</template>

<script>
    export default {
      name:'customied-order',
      data(){
        return {

        }
      },
      //自定义局部指令，focus ,使用时加v-,为v-focus;
      directives:{
        focus:{
          // 钩子函数参数  el binding Vnode oldVnode
          // 具体函数参数意义参考  https://cn.vuejs.org/v2/guide/custom-directive.html
          // 钩子函数如下

          //当被绑定的元素插入到 DOM 中时立即执行
          inserted:function(el){
            el.focus();
          },
          //只调用一次，指令第一次绑定到元素时调用
          bind:function () {

          },
          //组件更新时调用
          update:function(){

          },
          //更新后调用
          componentUpdated:function(){

          },
          //指令与元素解绑时调用
          unbind:function () {

          }

        }
      }
    }
</script>

<style scoped>

</style>
