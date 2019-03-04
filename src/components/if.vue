<template>
    <div class="ifApi">
      <h4>v-if语法</h4>
      <table border="1" class="staticsInfo">
        <tr v-if="status == 1">
          <td>1</td>
        </tr>
        <tr v-else-if="status == 2">
          <td>2</td>
        </tr>
        <tr v-else >
          <td>default</td>
        </tr>
      </table>
      <h4>用 key 管理可复用的元素</h4>
      <p>
        如果一个组件,多次渲染,那每次渲染时，不是从头渲染,而是复用上次渲染的结果,这样的话，就会残余有上次操作的痕迹，
        如果不需要的话，用key加以区分，即可从头渲染，不使用上次渲染的结果。
      </p>
      <p>
        参考链接：https://cn.vuejs.org/v2/guide/conditional.html#用-key-管理可复用的元素
      </p>
      <h4>v-show语法</h4>
      <p v-show="show">v-show 显示/隐藏</p>
      <p><button @click="alterShow">显示/隐藏</button></p>
      <h4>v-show对比v-if</h4>
      <dl>
        <dd>1,v-if 是条件渲染,它会在切换过程中,使得条件块内的事件和子组件被销毁和重建，是修改dom结构。而v-show在切换过程中是修改css显示状态。</dd>
        <dd>
          2,v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块.
            v-show,不管初始条件是什么，元素总是会被渲染.
        </dd>
      </dl>
      <p>如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。</p>
    </div>
</template>

<script>
    export default {
       data(){
         return {
           status:3,
           show:false
         }
       },
      methods:{
         alterShow(){
           this.show = !this.show;
           this.status = this.show ? 1 : 2;
         }
      }
    }
</script>

<style scoped lang="less">

</style>
