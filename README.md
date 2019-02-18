<<<<<<< HEAD
# vuestudydemo

##package.json解读

####scripts
> npm允许在package.json文件里面，使用scripts字段定义脚本命令。
```$xslt
{
  "scripts": {
    "build": "node build.js"
  }
}

```
上面代码是package.json文件的一个片段，里面的scripts字段是一个对象。它的每一个属性，对应一段脚本。比如，build命令对应的脚本是node build.js。

命令行下使用npm run命令，就可以执行这段脚本

```$xslt
$ npm run build
# 等同于执行
$ node build.js

```
> 查看当前项目的所有npm脚本命令， 可以使用不带任何参数的npm run命令。
> 参考链接： http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html

####dependencies 和 devDependencies的区别

  使用 --save-dev 安装的 插件，被写入到 devDependencies 域里面去，
  而使用 --save 安装的插件，则是被写入到 dependencies 区块里面去。
  
  devDependencies里面的插件只用于开发环境，不用于生产环境。（只是生产需要，开发不需要）
  而dependencies是需要发布到生产环境的（生产和开发都可以需要用）
  
  
  
  
  

