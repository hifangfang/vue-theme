import cssVars from "css-vars-ponyfill";
import { calculate, Themes} from "./core/variables";
import * as Util from "./utils"; //工具
import './core/elementui_override/index'
// 用户消息父子间的消息传递
class IframeMessage {
    variables = null
    constructor() {
        window.addEventListener('message', ev => {
            let { data, data: { name, type } } = ev
            if (name != 'zs-theme') return
            // 父传子
            if (type === 'send') {
                this.variables = data.variables
                this.updated()
            }
            // 子传父
            else if (type === 'postFather') {
                // console.log(data.data);
            }
        })
    }
    //子传父  用于消息传递父亲
    postFather(data) {
        if (!data) return
        let obj = {
            name: "zs-theme",
            type: "postFather",
            data,
        }
        window.parent.postMessage(obj, '*');
    }
    // 更新
    updated() {
        cssVars({
            watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
            variables: this.variables, // variables 自定义属性名/值对的集合
            onlyLegacy: false, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
        });
        window.localStorage.setItem('zs-theme-variable', JSON.stringify(this.variables))
    }
}

// 主题切换
class ZSTheme extends IframeMessage {
    static Util = Util
    constructor() {
        super()
        this.getCache();
        document.documentElement.setAttribute("data-theme", 'zs-theme')
    }
    // 设置主题
    setTheme(themeName) {
        this.variables = Themes[themeName]
        this.updated()
    }
    // 获取主题色
    getPrimary() {
        return this.variables['--primary'];
    }
    // 设置主色调主题
    primaryTheme(hexColor) {
        let variable = Themes.customTheme(hexColor)
        this.variables = variable
        this.updated()
    }

    // 切换按钮状态色 [{type:"success",value:"#666"},...]
    changeButtonStates(list) {
        let buttonStates = calculate.setButtonVariables(list)
        this.setOption(buttonStates)
    }
    // 切换侧边栏的颜色
    changeSideColor(primary_color, bg_color) {
        let sideVariables = calculate.setMenuVariables(primary_color,bg_color)
        this.setOption(sideVariables)
    }

    /**
     * @parram option 接收修改后的参数
     */
    setOption(myVariable) {
        Object.assign(this.variables, myVariable)
        this.updated()
    }
    clearCache() {
        window.localStorage.setItem('zs-theme-variable', '')
    }
    // 从localstorage 获取 储存的变量
    getCache() {
        let myvariable = window.localStorage.getItem('zs-theme-variable')
        this.variables = myvariable ? JSON.parse(myvariable) : Themes.default
        this.updated()

    }

}

// const ZsTheme = {
//     install(Vue, options) {
//         Vue.prototype.$zsTheme = new ZSTheme(options);
//     }
// }

export default ZSTheme
