// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.store = store;
Vue.use(ElementUi);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //存储公共的数据，所有子组件都可通过this.$root进行访问或修改
  //详情参考  https://cn.vuejs.org/v2/guide/components-edge-cases.html
  data:{
    status:0
  },
  //公共方法
  methods:{
    say:function(){
      console.log('老大说，hellow');
    }
  },
  //公共的计算属性
  computed:{
    add:function(){
       return this.status+1;
    }
  },
  router,
  components: { App },
  template: '<App/>'
})
