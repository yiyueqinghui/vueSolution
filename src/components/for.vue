<template>
    <div id="forCircle">
       <h4>v-for循环</h4>
       <table border="1" class="staticsInfo">
         <tr>
           <td>1,v-for循环数组</td>
           <td v-for="(item,index) in list" :key="index">{{index}} - {{item.name}}-{{item.score}}</td>
         </tr>
         <tr>
           <td>2,v-for循环对象</td>
           <td v-for="(val,key,index) in all" :key="index">{{index}} - {{key}} - {{val}} </td>
         </tr>
         <tr>
           <td>3,Vue提供了一组观察数组的变异方法</td>
           <td>push() / pop() / shift() / unshift() / splice() /  sort() / reverse()</td>
         </tr>
         <tr>
           <td>4,原生的非变异的数组编译方法</td>
           <td>filter(),slice()=>这些不会改变原始数组，但总是返回一个新数组<button @click="filterScore">筛选及格</button></td>
           <td v-for="(item,index) in filterList" :key="index">{{item.name}} - {{item.score}}</td>
         </tr>
         <tr>
           <td>5,Vue 不能检测以下变动的数组</td>
           <td>
             <dl>
               <dd>5.1利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue</dd>
               <dd>5.2你修改数组的长度时，例如：vm.items.length = newLength</dd>
             </dl>
           </td>
           <td>
             <button @click="changeListVal">修改数组第一项的值</button>针对5.1问题，this.$set(vm.items, indexOfItem, newValue);或者vm.items.splice(indexOfItem, 1, newValue)
           </td>
           <td>
             <button @click="changeListLen">修改数组长度</button>针对5.2问题，vm.items.splice(newLength)
           </td>
         </tr>
         <tr>
           <td>6,对象变更检测注意事项</td>
           <td> Vue 不能检测对象属性的添加或删除</td>
           <td>解决方法：eg：this.$set(this.userProfile, 'age', 27)<button @click="addAll">添加对象数据</button></td>
           <td>有时你可能需要为已有对象赋予多个新属性,你应该用两个对象的属性创建一个新的对象,如下
             vm.userProfile = Object.assign({}, vm.userProfile, {
               age: 27,
               favoriteColor: 'Vue Green'
             })
           </td>
         </tr>
         <tr>
           <td>7,显示数组过滤/排序结果</td>
           <td>
             <span v-for="item in newList">{{item.name}} - {{item.score}}</span>
           </td>
           <td></td>
         </tr>
         <tr>
           <td>8,一段取值范围的 v-for</td>
           <td><span v-for="n in 5">{{n+2}}</span></td>
         </tr>
         <tr>
           <td>9，当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中</td>
           <td>简单来说，v-for > v-if 二者处于同一级别时,v-for先运行，v-if在运行</td>
         </tr>
         <tr>
           <td>10,一个组件的 v-for</td>
           <td>
               <dl>
                 <!--可能是浏览器的dom模板解析的规定，dl下只能是dd,所有需要如下写法-->
                 <dd is="mydd" v-for="(item,index) in list" :key="index" :name="item.name" :score="item.score"></dd>
                 <!--这个是常规组件引用的写法-->
                 <!--<mydd v-for="(item,index) in list" :key="index" :name="item.name" :score="item.score"></mydd>-->
               </dl>
           </td>
         </tr>
       </table>
    </div>
</template>

<script>
    import mydd from './common/ddFor';
    export default {
      data(){
        return {
          list:[
            {name:'cj',score:100},
            {name:'liunian',score:10},
            {name:'lq',score:80}

          ],
          all:{
            name:'电视',
            price:987,
            size:'10*19'
          },
          filterList:[]
        }
      },
      methods:{
        filterScore(){
          this.filterList = this.list.filter(function(item){
            if(item.score>=60) return item;
          })
        },
        changeListVal(){
          this.list[1].name = '修改后的名字cjj';
          // this.$set(this.list,1,{name:'sss',score:99});
        },
        changeListLen(){
          this.list.length = 5;
        },
        addAll(){
          //常规js方法添加对象，无法被检测到
          // this.all['carrige'] = 10;

          //vue方法 ,添加单个
          // this.$set(this.all,'carrige',10.9);

          //Vue方法，添加多个对象合并
          this.all = Object.assign({},this.all,{
            'carrige':10.9,
            'date':'2019.02/27'
          });
        }
      },
      computed:{
        //筛选符合条件的数据
        newList(){
          return this.list.filter((item)=>{
            return item.score >= 90;
          })
        }

      },
      components:{
        mydd
      },
      mounted(){
        this.$nextTick(()=>{
           this.filterList = this.list;
        })
      }
    }
</script>

<style scoped>

</style>
