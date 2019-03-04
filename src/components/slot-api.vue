<template>
    <div id="slot-api">
      <h4>slot插槽</h4>
      <table border="1" class="staticsInfo">
        <tr>
          <td>1,slot的简单使用</td>
          <td>
            <mySlot> <b>slot插入的内容</b></mySlot>
          </td>
        </tr>
        <tr>
          <td>2,slot的后备内容</td>
          <td>
            <!--没有slot,则采用默认的slot(后备内容)-->
            <my-slot02></my-slot02>
          </td>
          <td>
            <!--用自定义的slot内容，覆盖后备内容-->
            <my-slot02><b style="color:red;">Save</b></my-slot02>
          </td>
        </tr>
        <tr>
          <td>3,具名插槽(2.6版本之前的写法)</td>
          <td>
             <my-slot03>
                <template slot="header" >
                   <nav>
                     <dl style="display: flex;justify-content: center;">
                       <dd>首页</dd>
                       <dd>公司</dd>
                     </dl>
                   </nav>
                </template>
                <template slot="main">
                   <b>主体内容</b>
                </template>
             </my-slot03>
          </td>
        </tr>

      </table>
    </div>
</template>

<script>
  import mySlot from './common/mySlot'
  import mySlot02 from './common/mySlot02'
  import mySlot03 from './common/mySlot03'
  export default {
    data(){
       return {

       }
    },
    components:{
      mySlot,
      mySlot02,
      mySlot03
    }
  }
</script>

<style scoped>

</style>
