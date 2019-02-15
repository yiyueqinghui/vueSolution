<template>
    <div id="useLess">
        <h1>less的使用</h1>
        <p class="bigImg">
          <img src="../../static/img/link.jpg"/>
        </p>
    </div>
</template>

<script>
    export default {
        name: "less"
    }
</script>

<style scoped lang="less">
  #useLess{
    h1{
      color: #df3919;
    }
    .bigImg{
      text-align: center;
      img{
        width: 100px;
      }
    }
  }

</style>
