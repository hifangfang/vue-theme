import {baseVariables} from "./base";
import { setMenuVariables , getPrimaryVariables ,setButtonVariables } from './calculate'
import {LightOrDark, mix, rgb2hex, rgba2hex} from '../../utils'
// 默认主题
export const defaultTheme = {
    ...baseVariables,
    ...getPrimaryVariables("#0066FF"), // 主色调
    ...setButtonVariables([{type: 'info', value: "#0066FF"}]), // 按钮
    ...setMenuVariables( "#0066FF", '#294266'), // 侧边栏
    '--side-active-color':"#0066FF",
    '--header-font-color': '#FFFFFF', // 头部标题色

}

// 浅色主题
export const lightTheme = {
    ...baseVariables,
    ...getPrimaryVariables("#0066FF"), // 主色调
    ...setButtonVariables([{type: 'info', value: "#0066FF"}]), // 按钮
    ...setMenuVariables("#0066FF"), // 侧边栏
    '--header-font-color': '#FFFFFF', // 头部标题色
};

// 黑暗主题
export const darkTheme  = {
    ...baseVariables,
    ...getPrimaryVariables("#1F2733"), // 主色调
    ...setButtonVariables([{type: 'info', value: "#1F2733"}]), // 按钮
    ...setMenuVariables("#0066ff","#1f2733"), // 侧边栏
    "--side-active-color": "rgba(0, 102, 255, 1)",
    '--header-font-color': '#FFFFFF', // 头部标题色
}
// 自定义颜色主题
export const customTheme = color => {
    let hexColor = color.indexOf('#') === 0 ? color : (color.split(',').length === 3 ? rgb2hex(color) : rgba2hex(color));
    let isLight =  LightOrDark(hexColor)
    let primaryVariables = getPrimaryVariables(hexColor)
    let variables = {
        ...baseVariables,
        ...primaryVariables,
        ...setButtonVariables(), // 按钮
        ...setMenuVariables(hexColor), // 侧边栏
        '--header-font-color': isLight ? "#000000" :'#FFFFFF' , // 头部标题色
    }
    console.log(primaryVariables);
    return variables

}

export const Themes = {
    default: defaultTheme,
    light: lightTheme,
    dark: darkTheme,
    customTheme
}

