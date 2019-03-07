<template>
    <ul class="list">
      <li v-for="(item,index) in child" :key="index ">
        <b style="color:red;" @click="show(index)">{{item.name}}</b>
        <div v-show="showLists[index]">
          <dlTag :list="item.list" v-if="item.list"></dlTag>
        </div>

      </li>
    </ul>
</template>

<script>
    import dlTag from './dlComponent'
    export default {
      props:['child'],
      name: "ul-component",
      data(){
        return {
          showLists:[]
        }
      },
      methods:{
        show(id){
          let bol = !this.showLists[id];
          this.showLists.splice(id,1,bol);
        }
      },
      components:{
        dlTag
      },
      mounted(){
        this.$nextTick(()=>{
          this.showLists = new Array(20).fill(false);
        })
      }

    }
</script>

<style scoped>

</style>
