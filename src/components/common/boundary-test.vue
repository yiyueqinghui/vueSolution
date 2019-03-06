<template>
    <div id="test">
        {{$root.status}}  {{store.data.num}}
        <b>访问父级组件的实例,---{{$parent.detail}}--不推荐使用</b>
        <input type="text" ref="enter" v-model="txt" />
        <div v-if="this.store.data.num < 25">
          <!--<myParent></myParent>-->1
        </div>

    </div>
</template>

<script>
    // import myParent  from '../boundary-api'
    export default {
      name:'test',
      // inject 注入父组件所提供的依赖
      inject:['getFocus'],
      data(){
        return {
          txt:'输入'
        }
      },
      methods:{
        focusInput(){
          this.$refs.enter.focus();
        }
      },
      components:{
        myParent:()=>import('../boundary-api')
      },
      mounted(){
        this.$nextTick(()=>{
           // console.log(this.$root.status);
           // this.$root.detail = '修改父组件的状态如下';
          this.getFocus();
          console.log(this.store.data.num);
          this.store.data.num = this.store.data.num + 1;
        })
      }
    }
</script>

<style scoped>

</style>
