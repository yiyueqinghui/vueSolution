<template>
   <dl class="tree-header">
     <dd v-for="(item,index) in list" :key="index" @click="show(index)">
       {{ item.name }}
       <div v-show="showList[index]" >
         <list01 :child="item.list" v-if="item.list"></list01>
       </div>
     </dd>
   </dl>
</template>

<script>
    // import list01 from './ulComponent'
    export default {
      name: "list-component",
      props:['list'],
      data(){
        return {
          showList:[]
        }
      },
      methods:{
        show(id){
          let bol = !this.showList[id];
          this.showList.splice(id,1,bol);
        }
      },
      components:{
        list01:()=>import('./ulComponent.vue')
      },
      mounted(){
        this.$nextTick(()=>{
          this.showList = new Array(20).fill(false);
        })
      }
    }
</script>

<style scoped>

</style>
