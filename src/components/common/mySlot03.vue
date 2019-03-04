<template>
    <div id="my-slot">
      <header>
        <slot name="header">头部</slot>
      </header>
      <main>
        <slot name="main">中间</slot>
      </main>
      <footer>
        <slot name="footer">页脚</slot>
      </footer>
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
