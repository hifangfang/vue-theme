<template>
<div class="theme-change">
    <el-button size="mini" @click="themeChange('default')" type="primary">经典(默认)</el-button>
    <el-button size="mini" @click="themeChange('light')">浅色调</el-button>
    <el-button size="mini" type="info" @click="themeChange('dark')">暗色调</el-button>
    <div class="custom">
        <span>自定义</span>
        <el-color-picker size="mini" @change="colorchange"></el-color-picker>
    </div>
</div>
</template>

<script>
import ZSTheme from "zs-theme";
import "zs-theme/dist/common.css";
import "zs-theme/dist/elementui_override.css"

export default {
    name: "theme-change",
    data() {
        return {
            Theme: null,
        };
    },
    methods: {
        // 16 进制颜色
        colorchange(hexcolor) {
            this.Theme.primaryTheme(hexcolor);
            // 同时影响嵌套的ifame主题
            this.notifyMessage(this.Theme.variables);
        },
        themeChange(themeName) {
            this.Theme.setTheme(themeName);
            // 同时影响嵌套的ifame主题
            this.notifyMessage(this.Theme.variables);
        },
        // 通过Postmessage的方式通知嵌套的iframe 子组件对应的参数数据
        notifyMessage(variables) {
            // window.frames['zs-iframe']?.postMessage(
            // {
            //   name: "zs-theme",
            //   type:"send", // 父传子 ， 在子页面的同步更改
            //   variables:variables
            // },'*')

            // 方法二
            var myframe = document.querySelector("iframe[name=zs-iframe]")
            myframe && myframe.contentWindow.postMessage({
                    name: "zs-theme",
                    type: "send", // 父传子 ， 在子页面的同步更改
                    variables: variables,
                },
                "*"
            )
            console.log(myframe);
        },
    },
    created() {
        this.Theme = new ZSTheme();
        console.log(this.Theme);
    },
    mounted() {
        // setTimeout(() => {
        //   this.Theme.setOption({
        //     '--side-background-color' : '#1989fa',
        //     '--primary': '#FF0000'
        //   })
        //   setTimeout(() => {
        //     this.Theme.setOption({
        //       "--primary":"#fff",
        //       '--side-background-color' : '#000',
        //     })
        //   }, 2000);
        // console.log(ZsTheme.Util);
        // this.Theme.changeSideColor('#00ff00',"#000000")
        // }, 5000);
    },
};
</script>

<style lang="less">
.theme-change {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .el-button {
        margin: 5px;
        min-width: 80px;
    }

    .custom {
        // position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        color: aliceblue;
        border-radius: 4px;
        border: 1px solid rgb(51, 182, 158);
        background-color: var(--primary8);
        // min-width: 80px;
        height: 32px;
        line-height: 32px;
        margin: 5px;
        padding: 5px 6px;

        span {
            // flex: 1;
            font-size: 12px;
            // position: absolute;
        }

        .el-color-picker {
            // padding: 0;

            // position: absolute;
            // top: 5px;
            // right: 5px;
            .el-color-picker__trigger {
                padding: 0;
                height: 28px;
                width: 34px;
            }
        }
    }
}
</style>
