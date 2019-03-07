<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
        <router-link to="/less">
           less使用
        </router-link>
      </li>
      <li>
      	<router-link :to="{name:'routeStudy',params:{id:id,status:status},query:{name:name}}">
      	<!--<router-link :to="{path:'/route',query:{id:id,status:status}}">-->
      		参数传递
      	</router-link>
      </li>
      <li>
        <router-link to="/templateGrammer">模板语法/计算属性/观察属性</router-link>
      </li>
      <li>
        <router-link to="/style">style和class</router-link>
      </li>
      <li>
        <router-link to="/if">v-if</router-link>
      </li>
      <li>
        <router-link to="/for"> v-for </router-link>
      </li>
      <li>
        <router-link to="/click"> 事件处理 </router-link>
      </li>
      <li>
        <router-link to="/input-api"> 输入框事件 </router-link>
      </li>
      <li>
        <router-link to="/component-api"> 组件基础 </router-link>
      </li>
      <li>
        <router-link to="/slot-api"> slot插槽 </router-link>
      </li>
      <li>
        <router-link to="/dynamic-api"> 动态/异步组件 </router-link>
      </li>
      <li>
        <router-link to="/boundary-api"> 边界问题 </router-link>
      </li>
      <li>
        <router-link to="/tree-header"> 组件相互引用 </router-link>
      </li>
      <li>
        <router-link to="/animate-api"> 进入/离开动画 </router-link>
      </li>
      <li>
        <router-link to="/customied-order"> 自定义指定 </router-link>
      </li>
      <li>
        <router-link to="/jsx-api"> 渲染函数 & jsx </router-link>
      </li>
      <li>
        <router-link to="/plugin-api"> 插件的使用 </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Vue api',
      id:100,
      status:false,
      name:'cj'
    }
  },
  methods:{
    testPromise:()=>{
      new Promise((resolve,reject)=>{
        let ranNum = (Math.random() * 2).toFixed(2);
        console.log(ranNum);
        if(ranNum>1){
          reject(ranNum)
        }else{
          resolve(ranNum)
        }
      }).then((num)=>{
        console.log('执行成功！',num);
      }).catch((num)=>{
        console.log('执行失败！',num);
      })
    }
  },
  mounted(){
    this.$nextTick(()=>{
      console.log('webpack.dev.conf.js中DefinePlugin定义的全局变量,任何一个地方都可以访问到')
      console.log('process.env',process.env);
      this.testPromise();
    })
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
         width: 100px;
         height: 100px;
         color: #dddddd;
         padding:10px 20px;         float: left;
         a{
           font-family: "webfont";
         }
       }
     }
   }
</style>
