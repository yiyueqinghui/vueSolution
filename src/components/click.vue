<template>
    <div id="click">
      <h4>事件处理</h4>
      <table border="1" class="staticsInfo">
        <tr>
          <td>1,事件处理函数</td>
          <td><button @click="greet">触发事件</button></td>
        </tr>
        <tr>
          <td>2,事件传递参数</td>
          <td><button @click="say('hi',$event)">传递参数</button></td>
        </tr>
        <tr>
          <td>3,事件修饰符---.prevent/.stop/.once/.capture/.self/.passive</td>
          <td>
             <div @click="first">
               <div @click.stop ="second">
                  <button>stop点击</button>
               </div>
             </div>
             <form v-on:submit="submit"><input type="submit" value="未阻止浏览器默认事件(刷新)" /> </form>
             <form v-on:submit.prevent="submit"><input type="submit" value="阻止浏览器默认事件(刷新)" /> </form>

             <div @click.capture="first">
                <div @click ="second">
                   <button>capture：事件捕获，即元素自身触发的事件先在此处理，然后才交由内部元素进行处理。</button>
                </div>
             </div>
            <div @click.self="first">
              111
              <div @click ="second">
                <button>self 点击内部，不会触发外部.self事件</button>
              </div>
            </div>
            <div @click.once="first"><button>once，事件只触发一次</button></div>
            <div v-on:scroll.passive="onScroll" style="height: 20px;border: 1px solid #000000;overflow: auto;"> 滚动事件 <br/> 滚动事件 </div>

          </td>
          <td>
            <dl style="text-align: left;">
               <dd>.stop=>阻止事件冒泡；</dd>
               <dd>.prevent=>阻止浏览器此刻默认事件</dd>
               <dd>.capture=>阻止事件捕获；即元素自身触发的事件先在此处理，然后才交由内部元素进行处理</dd>
               <dd>.self=>点击内部，不会触发外部.self事件</dd>
               <dd>.once=>事件只触发一次</dd>
               <dd>.passive=>滚动行为开始时将会立即触发</dd>
            </dl>
            <p> 参考页面：https://blog.csdn.net/weixin_41455147/article/details/82893812 </p>
          </td>
        </tr>
        <tr>
          <td>4,按键修饰符</td>
          <td>
             <p class="color">输入框中按下enter时，才会触发事件</p>
             <input v-on:keyup.enter="second" placeholder="按enter触发">
             <input v-on:keyup.right="second" placeholder="按右键触发">
          </td>
          <td>
            常用的按键码别名：
            .enter、
            .tab、
            .delete (捕获“删除”和“退格”键)、
            .esc、
            .space、
            .up、
            .down、
            .left、
            .right
          </td>
        </tr>
        <tr>
          <td>5,系统修饰符</td>
          <td>
            <input @keyup.ctrl.67="copy" placeholder="ctrl+c触发事件"/>
            <button @click.shift="first">按下shift键，同时点击触发事件</button>
            <input @keyup="code" placeholder="请输入，获取相应键盘编码"/>
          </td>
          <td>
             <b>可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器</b>
             <dl>
               <dd>.ctrl</dd>
               <dd>.alt</dd>
               <dd>.shift</dd>
               <dd>.meta</dd>
             </dl>
          </td>
        </tr>
        <tr>
          <td>6,.exact 修饰符，是针对（shift，ctrl,alt）的</td>
          <td>.exact，只有按下指定的键时才触发的事件（同时按下的有(ctrl或alt或shift)，即使包含指定的键也不会触发）。</td>
          <td>
            <button @click.ctrl="first">只要按下的键中有ctrl，点击就会触发，不管是否同时还按下alt或shift键</button>
            <button @click.ctrl.exact="first">只有按下ctrl，点击就会触发（如果同时按下是还有shift或alt,则不会触发。如果同时按下的是其他键的话，一样会触发）</button>
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

        }
      },
      methods:{
        greet(event){
          console.log(event);
          alert('Your tagName is'+ event.target.tagName );
        },
        say(txt,event){
          alert(event.target.tagName+ ' say ' + txt);
        },
        first(event){
          alert('first事件');
        },
        second(){
          alert('second事件');
        },
        submit(){
          console.log('提交了');
        },
        onScroll(){
          console.log('滚动了')
        },
        code(event){
          console.log(event.key,event.keyCode);
        },
        copy(){
          alert('触发了复制事件')
        }
      }

    }
</script>

<style scoped lang="less">
   dd{
     margin-left: 0!important;
   }
   .color{
     color:gray;
     font-size: 13px;
   }
</style>
