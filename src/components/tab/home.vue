<template>
    <div id="home">
      home页
      <input type="text" placeholder="请输入内容" />
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
