<template>
    <div id="input-api">
        <h4>表单输入绑定</h4>
        <table border="1" class="staticsInfo">
          <tr>
            <td>1,v-model基本用法</td>
            <td>可用于input,textarea,select元素,包括输入框，文本框，单选框，多选框，下拉菜单</td>
          </tr>
          <tr>
            <td>2,输入框</td>
            <td><input type="text" v-model="txt" placeholder="请输入" /></td>
            <td>输入内容是：{{txt}}</td>
          </tr>
          <tr>
            <td>3,文本框</td>
            <td><textarea v-model="article"></textarea></td>
            <td>输入文章：{{article}}</td>
          </tr>
          <tr>
            <td>4,单选框</td>
            <td>
               <div id="example-1">
                 <input type="radio" value="one" id="one" v-model="radioCon"><label for="one">one</label>
                 <input type="radio" value="two" id="two" v-model="radioCon"><label for="two">two</label>
               </div>
            </td>
            <td>单选结果如下：{{radioCon}}</td>
          </tr>
          <tr>
            <td>5,多选框</td>
            <td>
              <div id="example-2">
                <input type="checkbox" id="A" value="A" v-model="checkboxCon"/><label for="A">A</label>
                <input type="checkbox" id="B" value="B" v-model="checkboxCon"/><label for="B">B</label>
                <input type="checkbox" id="C" value="C" v-model="checkboxCon"/><label for="C">C</label>
              </div>
            </td>
            <td>
              多选结果：{{checkboxCon}}
            </td>
          </tr>
          <tr>
            <td>6,选择框</td>
            <td>
              <div id="example-3">
                 <select v-model="selectCon">
                    <option disabled value="">请选择</option>
                    <option v-for="item in selectRange" :value="item.val">{{item.txt}}</option>
                 </select>
              </div>
            </td>
            <td>
              选择结果如下：{{selectCon}}
            </td>
          </tr>
          <tr>
            <td>7,值的绑定（复选框，true-value,false-value的使用）</td>
            <td>
              <input type="checkbox" v-model="checkVal" id="status" true-value="yes" false-value="no" />
              <label for="status">状态</label>
            </td>
            <td>复选框，修改选中与未选中的状态值：{{checkVal}}</td>
          </tr>
          <tr>
            <td>8,v-model的修饰符</td>
            <td>
               <dl>
                 <dd>
                   <p>.lazy修饰符=》当输入完成后值才变更，相等于change事件</p>
                   <input type="text" v-model.lazy="msg" placeholder="使用lazy修饰符"/>  {{msg}} <br/>
                   <input type="text" v-model="msg02" placeholder="不使用lazy修饰符"/>  {{msg02}}
                 </dd>
                 <dd>
                   <p>.number修饰符=》自动将用户的输入值转为数值类型</p>
                   <input type="number" v-model.number="age" /> {{age}}
                 </dd>
                 <dd>
                   <p>.trim =》自动过滤用户输入的首尾空白字符</p>
                   <input type="text" v-model.trim="testTrim"/> {{testTrim}}
                 </dd>
               </dl>
            </td>
            <td></td>
          </tr>
        </table>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          txt:'',
          article:'',
          radioCon:'',
          checkboxCon:[],
          selectRange:[
            {
              txt:'水果',
              val:'fruit'
            },
            {
              txt:'空气',
              val:'air'
            },
            {
              txt:'食物',
              val:'food'
            }

          ],
          selectCon:'',
          checkVal:'',
          msg:'',
          msg02:'',
          age:'',
          testTrim:''

        }
      }
    }
</script>

<style scoped>

</style>
