<template>
    <div id="my-slot">
      <button>
        <!--默认的插入的内容是：submit-->
        <slot>Submit</slot>
      </button>
    </div>
</template>

<script>
    export default {
      data(){
        return {

        }
      }
    }
</script>

<style scoped>

</style>
