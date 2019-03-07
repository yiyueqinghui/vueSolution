<!--<template>-->
    <!--<div id="jsx-api">-->
      <!--<h4>渲染函数 & JSX</h4>-->
      <!--<table border="1" class="staticsInfo">-->
        <!--<tr>-->
          <!--<td></td>-->
          <!--<td></td>-->
          <!--<td></td>-->
        <!--</tr>-->
      <!--</table>-->
    <!--</div>-->
<!--</template>-->

<script>
    export default {
      name: "jsx-api",
      data(){
        return {
          title:'渲染函数 & JSX',
          id:1

        }
      },
      render(creatElement){
        return creatElement('div',{
          'class':{
            foo:true,
            zhx:false
          },
          attrs:{
            'data-id':this.id,
            id:'myId'
          }
        },
        [
          creatElement('h'+this.id,{
            style:{
              'text-align':'center',
              'font-size':'20px'
            },
            attrs:{
              id:'myHeader'
            }
          },this.title)
        ]);
      }
    }
</script>

<style scoped>
  .foo{
    color: red;
  }
</style>
