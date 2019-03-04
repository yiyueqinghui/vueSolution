<template>
    <div id="grammer">
       <h4>模板语法</h4>
      <table border="1" class="staticsInfo">
        <tr>
           <td>'{{}}'语法,v-once命令</td>
           <td>{{msg}}</td>
           <td v-once> {{msg}}</td>
           <td><button @click="changeMsg">修改msg</button></td>
        </tr>
        <tr>
          <td>'v-html'指令</td>
          <td v-html="htmlMsg"></td>
        </tr>
        <tr>
          <td>'v-bind'指令</td>
          <td v-bind:num="'td-'+num">绑定了num给td</td>
          <td>给html元素绑定属性</td>
        </tr>
        <tr>
          <td>'v-on'绑定事件</td>
          <td v-on:click="changeMsg">改变msg值</td>
          <td @click="changeMsg">改变msg值,'v-on'的简写@</td>
        </tr>
        <tr>
          <td>在模板中使用js表达式</td>
          <td>使用三元表达式：{{num>10?num:1}}</td>
          <td>在双括号语法中使用js语法修改字符串:{{ msg.split('').reverse().join('-') }}</td>
          <td :msg=" msg+'-'+num ">在'v-bind'语法中使用字符串拼接</td>
        </tr>
        <tr>
          <td>针对v-on和v-bind指令,2.6.0以后新增的动态参数</td>
          <td v-on:[eventType]="changeMsg"> v-on动态参数</td>
          <td v-bind:[dataVar] = 'num'> v-bind动态参数 </td>
        </tr>
        <tr>
          <td> 修饰符,语法. ,用于指出一个指令应该以特殊方式绑定</td>
          <td @touchMove.prevent="changeMsg"><button> .prevent阻止默认事件,相等于event.preventDefault()</button></td>
        </tr>
      </table>
      <h4>计算属性和侦听器</h4>
      <table border="1" class="staticsInfo">
        <tr>
          <td>计算属性computed</td>
          <td>(单价{{price}} * 数量{{num}})*折扣{{discount*100+"%"}} + 运费{{carrige}} - 优惠{{ticket}} = 总价{{total}}</td>
          <td>计算属性属于响应式依赖,每当依赖的值发生变化,其也会变化。并且变化后的值存储在缓存中，下次调用时，可直接调用。</td>
          <td>计算属性和方法在功能上类似，其区别是：计算属性有缓存,方法无缓存</td>
          <td>购买数量 <input type="number" v-model="num" />   </td>
        </tr>
        <tr>
          <td>计算属性的getter,setter </td>
          <td>总价{{total}}</td>
          <td>setter属性,写法见https://cn.vuejs.org/v2/guide/computed.html </td>
        </tr>
        <tr>
          <td>观察属性watch</td>
          <td>监控num,控制台打印结果,新值为{{num}}</td>
          <td>当需要在数据变化时执行<b>异步或开销较大</b>的操作时，观察属性是最有用的。</td>
        </tr>

      </table>
    </div>
</template>

<script>
  export default {
    name: "template-grammer",
    data(){
      return {
        num:0,
        msg:'文本信息',
        eventType:'click',
        dataVar:'price',
        price:99.8,
        ticket:10,
        carrige:15,
        discount:1,
        htmlMsg:'<b style="color:red;">html指令</b>'

      }
    },
    methods:{
      changeMsg(){
        this.num++;
        this.msg = '文本信息' +  this.num;
        this.dataVar = 'price-'+this.num;
      }
    },
    computed:{
      //计算总价，每当其中一个值发送改变时，总价也会发送改变
      total(){
          //随即折扣
          var discountVal = ((Math.random())*0.5 + 0.5).toFixed(2);
          this.discount = discountVal;

          var final = this.price * this.num * this.discount + this.carrige - this.ticket;
          return final.toFixed(2);
      }
    },
    watch:{
      num(newVal,oldVal){
         console.log('num改变了','新值是'+newVal,'原来的值是'+oldVal);
      }
    },
    mounted(){

    }


  }
</script>

<style scoped lang="less">
  #grammer {

  }

</style>
