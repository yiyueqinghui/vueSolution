<template>
    <div id="boundary">
      <h4> 处理边界问题 </h4>
      <table border="1" class="staticsInfo">
        <tr>
          <td>1,$root访问根实例/$parent访问父即组件</td>
          <td> 子组件访问父组件的数据,$parent </td>
          <td><boundaryTest></boundaryTest></td>
        </tr>
        <tr>
          <td>2,访问子组件实例或子元素</td>
          <td>通过 ref 特性为这个子组件赋予一个 ID 引用 </td>
          <td><boundaryTest ref="test"></boundaryTest></td>
        </tr>
        <tr>
          <td>3,递归组件、组件之间的循环引用</td>
          <td>参考：https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6 </td>
          <td></td>
        </tr>
        <tr>
          <td>4,强制更新</td>
          <td> $forceUpdate</td>
          <td>参考页面：https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6</td>
        </tr>
        <tr>
          <td>5,通过 v-once 创建低开销的静态组件</td>
          <td>你可以在template根元素上添加 v-once 特性以确保这些内容只计算一次然后缓存起来</td>
          <td>不过一般不介意（https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6） </td>
        </tr>
      </table>
    </div>
</template>

<script>
    import boundaryTest from './common/boundary-test'
    export default {
      data(){
        return {
          detail:'详细信息如下'
        }
      },
      components:{
        boundaryTest
      },
      //provide 选项允许我们指定我们想要提供给后代组件的数据/方法
      //参考：https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0
      provide: function () {
        return {
          getFocus: this.getFocus
        }
      },
      methods:{
        focus(){
          console.log(this.$refs.test);
          // this.$refs.test.$refs.enter.focus();
          this.$refs.test.focusInput();
        },
        getFocus(){
          console.log(this.$refs.test);
          // this.$refs.test.$refs.enter.focus();
          this.$refs.test.focusInput();
        }

      },
      mounted(){
         console.log('vueComponent实例化');
         console.log(this);
         console.log('vue实例化');
         console.log(this.$root);
         this.$root.status = 1;
         console.log('修改根组件status');
         console.log(this.$root.status);
         console.log('调用根组件say方法');
         this.$root.say();
         console.log('调用根组件计算方法');
         console.log(this.$root.add);

         this.store.data.num = 22;
         console.log(this.store.data);
         this.store.methods.mySay();

         console.log('访问子组件数据',this.$refs.test.txt);
         // this.focus();

      }
    }
</script>

<style scoped>

</style>
