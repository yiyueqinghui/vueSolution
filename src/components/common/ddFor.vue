<template>
    <dd class="item">
        {{name}} --- {{score}}
    </dd>
</template>

<script>
    export default {
      props:['name','score'],
      data(){
        return {

        }
      }

    }
</script>

<style scoped>

</style>
