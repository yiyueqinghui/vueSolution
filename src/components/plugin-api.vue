<template>
    <div id="plugin-api">
      <h4>插件使用方法</h4>
      <table border="1" class="staticsInfo">
        <tr>
          <td>1,Vue.use() 添加全局方法或者属性</td>
          <td>
            <el-row>
              <el-button @click="toast" type="success"><i class="el-icon-delete"></i> success</el-button>
            </el-row>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
      name: "plugin-api",
      data(){
        return {
           arr:['a']
        }
      },
      methods:{
        toast(){
          console.log(this);
          this.$message('这是一条消息提示');
        }
      },
      created(){
        // this.arr.last = function(){
        //   console.log('123');
        // }
        // this.arr.last();
        function A(){
          this.data = 'hellow';
        }
        var a = new A();
        var b = new A();
        console.log(a);
        console.log(A.prototype);
        console.log(a.__proto__);
      }
    }
</script>

<style scoped>

</style>
