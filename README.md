<<<<<<< HEAD
# vuestudydemo

> package.json解读

##scripts
- npm允许在package.json文件里面，使用scripts字段定义脚本命令。
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
- 查看当前项目的所有npm脚本命令， 可以使用不带任何参数的npm run命令。
- 参考链接： http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html


=======
# test
>>>>>>> test/master
