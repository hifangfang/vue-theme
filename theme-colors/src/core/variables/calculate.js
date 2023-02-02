// 计算色值
// e.g.按钮状态色(成功 警告 危险)

import { mix, hex2rgb, LightOrDark } from '../../utils/index'

/**
 * 根据主题色生成不同rgba下的颜色
 * @param color
 * @returns color对应的不同alpha值的颜色
 */
export const getPrimaryVariables = (color) => {
    return {
        '--primary': hex2rgb(color, 1),
        '--primary05': hex2rgb(color, 0.05),
        '--primary1': hex2rgb(color, 0.1),
        '--primary2': hex2rgb(color, 0.2),
        '--primary3': hex2rgb(color, 0.3),
        '--primary4': hex2rgb(color, 0.4),
        '--primary5': hex2rgb(color, 0.5),
        '--primary6': hex2rgb(color, 0.6),
        '--primary7': hex2rgb(color, 0.7),
        '--primary8': hex2rgb(color, 0.8),
        '--primary9': hex2rgb(color, 0.9),
        '--primary-plain': mix(color, '#ffffff', 10),
        '--primary-border': mix(color, '#ffffff', 40),
        '--primary-hover': mix(color, '#ffffff', 80),
    }
}
export const setScrollbarVariables = (color) => {
    return {
        /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
        "--scrollbar-width": "6px",
        "--scrollbar-height": "6px",
        "--scrollbar-background-color": hex2rgb(color, 0.4),
        "--scrollbar-border-radius": "6px",
        /*定义滚动条轨道*/
        "--scrollbar-track-width": "6px",
        "--scrollbar-track-height": "6px",
        "--scrollbar-track-background-color": hex2rgb(color, 0.4),
        "--scrollbar-track-border-radius": "6px",
        /*定义滑块*/
        "--scrollbar-thumb-width": "6px",
        "--scrollbar-thumb-height": "6px",
        "--scrollbar-thumb-background-color": hex2rgb(color, 0.8),
        "--scrollbar-thumb-border-radius": "6px",
    }
}
// 默认情况下的的状态配色
let buttonStates = [
    // 主色调 "primary ”#0066ff"
    // { type: "primary", value: "#0066FF" },
    // 状态色 成功 --success #67c23A
    { type: "success", value: "#67c23A" },
    // 危险  "--danger": "#D40000",
    { type: "danger", value: "#F55656" },
    // 警告 --warning #E6A345
    { type: "warning", value: "#E6A345" },
    // 信息 / info #B8C0CC #8A9099
    { type: "info", value: "#8A9099" }
]
/**
 * 计算不同状态的按钮在 plain和 hover下的颜色
 * @param myStates Array [{type: 'success', value: '#67c23A'}]
 * @param type 按钮状态类型 success/warning/danger
 * @returns {{[p: string]: *|string}}
 */
export const setButtonVariables = (myStates= []) => {
    let result = {};
    let stateCalc = (type, value) => {
        return {
            ['--' + type]: value,
            ['--' + type + '-plain']: mix(value, '#ffffff', 10),
            ['--' + type + '-border']: mix(value, '#ffffff', 40),
            ['--' + type + '-hover']: mix(value, '#ffffff', 80)
        }
    }
    buttonStates.forEach(state => {
        let {type, value} = state;
        result = Object.assign(result, stateCalc(type, value))
    })

    if(myStates.length > 0) {
        myStates.forEach(state => {
            let {type, value} = state;
            result = Object.assign(result, stateCalc(type, value))
        })
    }
    return result
}
/**
 * 左侧侧边栏相关变量
 * 白色背景的基于主题色做一些变换，非白色背景的基于白色做变换
 * @param color 侧边栏背景色
 */
export const setMenuVariables = (primary_color = '#0066FF', bg_color = '#ffffff') => {
    let obj = {
        '--side-background-color' : bg_color,// 白色背景色
        '--side-font-color': '#5C6066',
        '--side-font-hover-color': primary_color,
        '--side-active-color': hex2rgb(primary_color, 0.9),
        '--side-hover-color': hex2rgb(primary_color, 0.05),
    }
    if(bg_color.toLowerCase() !== '#ffffff') {
        obj = {
            '--side-background-color' : bg_color, // 侧边栏背景色
            '--side-font-color': '#FFFFFF',
            '--side-font-hover-color': '#FFFFFF',
            '--side-active-color': hex2rgb('#ffffff', 0.2),
            '--side-hover-color': hex2rgb('#ffffff', 0.1),
        }
    }
    return obj
}

export const calculate = {
    getPrimaryVariables,
    setButtonVariables,
    setMenuVariables
}
