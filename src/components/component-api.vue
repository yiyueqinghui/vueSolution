<template>
    <div id="component-api">
      <h4>组件基础</h4>
      <table border="1" class="staticsInfo">
        <tr>
          <td>1,组件传值</td>
          <td>
            <my-component :data="article"></my-component>
          </td>
        </tr>
        <tr>
          <td>2,子组件传递数据给父组件</td>
          <td>
            <my-component v-on:larger="larger" :data="article"></my-component>
          </td>
          <td>原理：采用自定义事件的方式，触发父组件的事件。</td>
        </tr>
        <tr>
          <td>3,在组件上使用v-model</td>
          <td>
            <my-component02 :val="val" v-on:input="modifyVal"></my-component02>
            <p>等同于</p>
            <my-component02 :val="val" v-model="searchTxt"></my-component02>
          </td>
          <td>{{searchTxt}}</td>
        </tr>
        <tr>
          <td>4,在组件上使用插槽slot</td>
          <td>
            <my-component :data="article">
               <h4>插槽内容如下</h4>
            </my-component>
          </td>
          <td>{{newSearch}}</td>
        </tr>
        <tr>
          <td>5,动态组件</td>
          <td>
            <dl style="overflow: hidden;">
              <dd v-for="(item,index) in list" :key="index" class="tab" @click="switchTab(item)">{{item}}</dd>
            </dl>
            <component :is="componentName"></component>
          </td>
        </tr>
        <tr>
          <td>6,组件传入一个对象</td>
          <td>
             <my-component03 v-bind="propsObj"></my-component03>
             <!-- 相等于如下写法 -->
             <my-component03 :title="propsObj.title"></my-component03>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>7,组件传值,.sync修饰符</td>
          <td>作用=》当父组件传递过去给子组件的数据被子组件修改时,父组件同样会修改</td>
          <td>
             <my-component04 v-bind:name.sync="syncObj.name" v-bind:age.sync="syncObj.age" ></my-component04>
             <p>{{syncObj.name}}-{{syncObj.age}}</p>
             <my-component04 v-bind.sync="syncObj"></my-component04>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
    import myComponent from './common/myComponent'
    import myComponent02 from './common/myComponent02'
    import Home from './tab/home'
    import Company from './tab/company'
    import Linkme from './tab/linkme'
    import myComponent03 from './common/myComponent03'
    import myComponent04 from './common/myComponent04'
    export default {
      data(){
        return {
         article:{
           title:'标题',
           date:'2019-02-28',
           font:13
         },
         val:'hellow world',
         searchTxt:'',
         newSearch:'',
         list:[
           'Home','Company','Linkme'
         ],
         componentName:'Home',
         propsObj:{
           title:'个人信息',
           name:'cj',
           date:'2019/02/22'
         },
         newname:'123',
         syncObj:{
           name:'流年',
           age:28
         }
        }
      },
      methods:{
        larger(val){
          if(val){
            this.article.font = val;
          }else{
            this.article.font += 1;
          }
          console.log(this.article);
        },
        modifyVal(val){
          this.searchTxt = val;
        },
        switchTab(tabName){
          this.componentName = tabName;
        }
      },
      components:{
        myComponent,
        myComponent02,
        myComponent03,
        myComponent04,
        Home,
        Company,
        Linkme
      }
    }
</script>

<style scoped>
   .tab{
     padding:5px 10px;
     float: left;
     background-color:#dddddd;
     margin: 0 10px;
   }
</style>
