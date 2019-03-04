<template>
    <div id="useLess">
        <h1>less的使用</h1>
        <dl>
        	<dd>
        		1,安装less      npm install less less-loader --save
        	</dd>
        	<dd>
        		2,修改webpack.base.config.js文件,新增如下<br/>
        	    {{addConfig}}
        	</dd>
        	<dd>
        		3,在相应的组件style填写lang=“less”<br/>
        	    {{addLess}}
        	</dd>
        	<dd>
        		4,less用法：
        		https://less.bootcss.com/
        	</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "less",
        data(){
        	return {
        		addConfig:{
        			test:/.\less$/,
			        loader:"style-loader!css-loader!less-loader"
        		},
        		addLess:`
        		   <style lang="less"></style>
        		`
        	}
        }
    }
</script>

<style scoped lang="less">
  #useLess{
    h1{
      color: #df3919;
    }
    .bigImg{
      text-align: center;
      img{
        width: 100px;
      }
    }
    dl{
    	text-align: left;
    	dd{
    		margin: 20px 0;
    	}
    }
  }

</style>
