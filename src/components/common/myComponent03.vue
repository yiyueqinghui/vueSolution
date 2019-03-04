<template>
    <div id="test">
       {{title}} - {{name}} - {{date}}
    </div>
</template>

<script>
    export default {
      /*type值：String  Number Boolean Array Object Date Function Symbol*/
      props:{
        title:{
          type:String,
          require:true,
          default:''
        },
        name:{
          type:String,
          require:true,
          default:'独醉流年'
        },
        date:{
          type:String,
          default:function(){
            var date = new Date();
            return date.getFullYear() + '/' + (date.getMonth()+1) + "/" + date.getDate();
          }
        }
      },
      data(){
        return {

        }
      },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
