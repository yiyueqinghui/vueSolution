<template>
    <div id="my-component02">
       <input type="text" :value="val" v-on:input="modifyVal" />
    </div>
</template>

<script>
    export default {
      props:['val'],
      data(){
        return {

        }
      },
      methods:{
        modifyVal(event){
          var val = event.target.value;
          this.$emit('input',val);
        }
      }
    }
</script>

<style scoped>

</style>
