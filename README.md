# vue-theme 插件

> 本插件主要提供大部分样式中会使用到的样式变量来统一平台样式，依赖 css-vars-ponyfill 实时编译 css 的 var 变量来实现主题切换

## 样式变量
> 以下是常用变量说明

+ 不随主题变化的基本变量，尽量在书写样式的过程中使用以下变量

```javascript
const baseVariables = {
    // 黑白色
    "--color-white": "#FFFFFF",
    "--color-black": "#000000",
    // 背景色
    "--background-color": "#fefefe",  // 内容背景色
    "--background-color1": "#F0F3F7", // body 背景色
    // 字体大小
    "--font-size-primary": "14px",// 主字体大小
    "--font-size-small": "12px", // 一般为提示文字
    "--font-size-medium": "16px", // 一般为标题文字
    "--font-size-big": "18px",
    "--font-size-bigx": "20px",
    "--font-size-large": "22px",
    // 字体颜色
    "--font-color-primary": "#2E3033",
    "--font-color-regular": "#5C6066",
    "--font-color-secondary": "#8A9099",
    "--font-color-placeholder": "#B8C0CC",
    // 字体 weight
    "--font-weight-normal": 400,
    "--font-weight-bolder": 600,

    // 圆角变量
    "--radius-small": "2px",
    "--radius-normal": "4px",
    "--radius-big": "8px",
    // tab 标签页 header 高和行高
    "--tabs-header-height": "36px",
    // 面包屑高和行高
    "--breadcrumb-height": "36px",
    // 边框 border 颜色
    "--border-color-base": "#DCE0E6",
    "--border-color-light": "#E4E7ED",
    "--border-color-lighter": "#EBEFF5",
    "--border-color-extralight": "#F2F6FC",

    /* -------Button------ */
    "--button-font-size": "14px",
    "--button-font-size-mini": "12px",
    "--button-font-weight": 400,
    "--button-border-radius": "4px",
    "--button-padding-vertical": "8px", // 垂直
    "--button-padding-vertical-mini": "7px", // 垂直
    "--button-padding-horizontal": "15px", // 水平
    "--button-margin-left": "8px",  // 按钮之间间距
}
``` 
+ 主色调及不同 alpha 值的主色调颜色
```
'--primary',
'--primary05'   // 很淡的主题色，在做hover时比较适合使用
'--primary1',
'--primary2',
'--primary3',
'--primary4',
'--primary5',
'--primary6',
'--primary7',
'--primary8',
'--primary9',
```
+ 按钮状态色（对应 el-button 中不同 type 的按钮）
```
--primary  // 主色调
--primary-plain // 朴素效果的颜色 mix20
--primary-border // 按钮 border mix40
--primary-hover // 鼠标经过主色调的颜色 mix60
        
--success: "#67c23A"  // 成功
--success-plain: "#e1f3d8"
--success-border: "#c2e7b0"
--success-hover: "#a4da89"

--warning: "#E6A345" // 警告
--warning-plain: "#faedda"
--warning-border: "#f5dab5"
--warning-hover: "#f0c88f"


--danger: "#F55656" // 危险
--danger-plain: "#fddddd"
--danger-border: "#fbbbbb"
--danger-hover: "#f99a9a"


--info: "#8A9099"  // 信息
--info-plain: "#e8e9eb"
--info-border: "#99c2ff"
--info-hover: "#b9bcc2"

```
+ 侧边栏导航相关色值（白色背景的基于主题色做一些变换，非白色背景的基于白色做变换）
```
'--side-background-color'    // 侧边栏整体背景色
'--side-font-color'          // 侧边栏字体色
'--side-font-hover-color'    // 侧边栏 hover 状态字体色
'--side-active-color'       // 侧边栏 active 状态菜单项背景色
'--side-hover-color'        // 侧边栏 hover 状态菜单项背景色
```

## 目录说明
```javascript 
|-- examples  /* 示例项目 */
|-- theme-colors   /* 插件源码 */
    |-- package.json
    |-- webpack.config.js  /* 打包配置文件 */
    |-- dist               /* 打包输出文件夹 */
    |   |-- index.js
    |   |-- index.css
    |   |-- fonts  /* 字体文件夹 */
    |   |-- imgs   /* 图片文件夹 */
    |-- src
        |-- index.js /* 入口文件 */
        |-- core     /* 核心模块 */
        |   |-- common                   /* 对全局样式的修改，注入常用css类名 */
        |   |   |-- common.scss          /* 基础样式变量 */
        |   |-- components          /* 已开发组件的css抽离 */
        |   |   |-- index.less      /* 入口文件 */          
        |   |   |-- header-box     
        |   |   |    |-- header-box.less  
        |   |   |-- zs-tabs  
        |   |   |    |-- zs-tables.less   
        |   |   |    ...
        |   |   |-- zs-home  
        |   |   |    |-- zs-home.less 
        |   |-- elementui_override     /* element-ui 组件样式覆盖，需要在代码的class中加入 */  
        |   |   |-- index.less  /* 入口文件 */  
        |   |   |-- button      /* zs-btn */
        |   |   |-- dialog   /* zs-dialog */
        |   |   |-- message   /* zs-message */
        |   |   |-- popup     /* zs-popup */
        |   |   |-- dropdown     /* zs-dropdown */
        |   |-- iconfont     /* 字体图标矢量文件 */
        |   |-- variables    /* 变量定义文件 */
        |   |   |--base.js       /* 基本变量定义 */
        |   |   |--calculate.js  /* 需要跟随主色调进行自动计算的变量，如按钮、侧边导航 */
        |   |   |--index.js      /* 入口文件 */
        |   |   |--themes.js     /* 已经定义好的几套主题色值 */
        |-- utils    /* 常用工具函数库 */
            |-- HSBcolor.js
            |-- index.js
```
## 怎么使用 ？ 
> 在私服环境下: [ http://192.168.11.146:8073/repository/npm-all/ ]
+ 安装
```bash
npm install vue-theme
```
+ 引入使用（可参照 examples/components/ThemeChange.vue ）
```javascript

    import ZsTheme from "vue-theme"  // 引入该插件
    import 'vue-theme/dist/index.css' // 引入插件主 css 样式文件（含iconfont文件）

    let myTheme = new ZsTheme() // 实例化之后即可
    console.log(myTheme.variables) // 当前主题所有变量

```
## 开始使用
+ 直接使用公共样式(详情运行examples查看)
```js
import "vue-theme/dist/common.css"; // 引入公共样式文件
<!-- 左右布局 -->
  <div class="zs-home">
    <div class="zs-wrapper">
    </div>
  </div>
```
+ 直接使用公共element覆盖样式
```js

import "vue-theme/dist/elementui_override.css"; // 引入覆盖样式文件， zs-dialog/zs-btn/zs-message/zs-popup/zs-dropdown...

<el-dialog class="zs-dialog"></el-dialog>  // 在 class 中加入zs-dialog公共样式
```
+ 写样式时使用样式变量
```css
body {
  background: var(--background-color1);
  color: #666;
  font-size: 16px;
  font-family: Microsoft YaHei;
}
```
## 实例方法
+ 切换主题: setTheme(themeName)
```javascript
 // 如果你想修改主题配色 插件提供3套配色方案 (default, light ,dark)
myTheme.setTheme('default')
```

+ 修改主色调: primaryTheme(color)

```javascript
// 你可以传入一个(十六进制的颜色)自定义主色调，同时他会自动化调配出相应的配色
myTheme.primaryTheme('#1989fa') // 主色调为蓝色
```
+ 获取主色调
```javascript
myTheme.getPrimary() 
```
+ 修改侧边栏 changeSideColor(primary_color, bg_color)
```javascript
// 如果对侧边导航栏有另外的个性化设定，可传入主题色 primary_color 和侧边导航背景色 bg_color（默认为白色）另外配置
myTheme.changeSideColor('#0066FF','#ffffff')

```
+ 修改不同状态按钮的颜色 changeButtonStates(list)

```javascript 
// 传入一个list 改变状态
let array = [{type:'info',value:"#123456"},{type:"success",value:"#654321"}]
myTheme.changeButtonStates(array)
```

+ 修改任意局部变量 setOption(Variables)
```javascript
// 如果想修改修改侧边栏的颜色，或者成功按钮的颜色，您可以传入一个对象进行修改
let editVariable = {
    "--side-background-color": "#fff",
    "--success" : "#00ff00"
}
myTheme.setOption(editVariable)
```
+ 嵌套iframe 的 主题切换 (父传子)

```html 
   <iframe src="xxxx.html" name='myframe'></iframe>
   <script>
    // 当主题嵌套其他网页的时候 可以适配嵌套网页的主题样式
      window.frames['myframe'].postMessage(
          {
            name: "vue-theme", 
            type:"send"
            variables:variables // 当前主题的全局变量
          },'*')
    // 注！嵌套的iframe 自身有vue-theme 的方法
   </script>
   <!-- 详情用法见examples/src/test/iframe-demo1.html -->
  
```

+ 嵌套iframe 的消息通知 （子传父）
```
let theme = new ZsTheme()
let data = '需要上传的data'数据
theme.postFather (data)
<!-- 详情用法见examples/src/test/iframe-demo1.html -->

```

## 静态方法 [ZsTheme.Util] 
> 提供颜色混合，融合等方法，详情见 utils/index.js

## 本地联调
```shell
# 在 theme-colors下 
npm run build
# 在 theme-colors下
npm link
# 在你的项目目录下 
npm link vue-theme
# 运行你的项目，每次 theme-colors 中有改动都需重新 npm run build，
# 也可自行更改 theme-colors 下 package.json 实现无需重新打包即可联调
```
