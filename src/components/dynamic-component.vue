<template>
    <div id="dynamic">
      <h4>动态、异步组件</h4>
      <table border="1" class="staticsInfo">
        <tr>
          <td>1,在动态组件上使用 keep-alive</td>
          <td>作用=>保持这些组件的状态</td>
          <td>
            <nav>
              <dl style="overflow: hidden;display: flex;justify-content: space-around;">
                <dd class="nav" v-for="(item,key) in navs" :key="key" @click="switchTab(item.name)">{{item.showName}}</dd>
              </dl>
            </nav>
            <main>
              <!--keep-alive保存组件切换状态-->
              <keep-alive>
                <component :is="componentName">
                  保存切换状态
                </component>
              </keep-alive>
            </main>
          </td>
          <td>
            <nav>
              <dl style="overflow: hidden;display: flex;justify-content: space-around;">
                <dd class="nav" v-for="(item,key) in navs" :key="key" @click="switchTab(item.name)">{{item.showName}}</dd>
              </dl>
            </nav>
            <main>
                <component :is="componentName">不保存切换状态 </component>
            </main>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
    import Home from './tab/home'
    import Company from './tab/company'
    export default {
      data(){
        return {
          navs:[
            {
              name:'Home',
              showName:'首页'
            },
            {
              name:'Company',
              showName:'公司'
            }
          ],
          componentName:'Home'
        }
      },
      methods:{
        switchTab(name){
          this.componentName = name;
        }
      },
      components:{
        Home,
        Company
      }
    }
</script>

<style scoped>
  .nav{
    width: 100px;
    text-align: center;
    float: left;
    margin: 0 10px;
    background-color:lightgray;
  }
</style>
