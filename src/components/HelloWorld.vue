<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><img class="testImg" src="../../static/img/1.jpg" /></p>
    <p class="bg"></p>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li>
        <router-link to="/less">
          less使用
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
   .hello{
     .testImg{
       width: 300px;
       margin: 0 auto;
     }
     .bg{
       width: 100%;
       height: 100px;
       background:url("../assets/logo.png") no-repeat center center;
     }
     ul{
       display: inline-block;
       list-style: none;
       margin: 0 auto;
       overflow: hidden;
       li{
         color: #dddddd;
         padding:10px 20px;         float: left;
         a{
           font-family: "webfont";
         }
       }
     }
   }
</style>
