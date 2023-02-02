<template>
<div class="testview">

    <div class="zs-title1">
        换一个风格
        <div>
            <el-button icon="el-icon-grape" type="primary" @click="changeView('home')" >厂字布局</el-button>
            <el-button icon="el-icon-watermelon" type="success" @click="changeView('homeUpDown')">上下布局</el-button>
            <el-button icon="el-icon-cherry" type="info" @click="changeView('homeRightLeft')"> 左右布局</el-button>

        </div>
    </div>
    <div class="zs-title1">
        切换主题
        <theme-change></theme-change>
    </div>
    <div class="zs-title1">
        切换样式
        <div>
            <el-button @click="centerheader('')">无</el-button>
            <el-button @click="centerheader('zs-tabs')">tabs选项卡</el-button>
            <el-button @click="centerheader('zs-breadcrumb')">面包屑</el-button>
        </div>
    </div>
    <div class="zs-title1">
        常用功能
        <div>
            <el-button @click="showdrawer=true">点击打开抽屉</el-button>
            <el-button @click="showdialog=true">点击打开弹窗</el-button>
        </div>
    </div>
    <div class="zs-title1">
        文本预览
        <textview></textview>

    </div>
    <!-- 消息通知 -->
    <test-notify></test-notify>



    <!-- 抽屉组件 -->
    <zs-drawer :showdrawer.sync="showdrawer" @close="close" @submit="submit" title="我是标题">
        <template>
            <div style="height:1200px">
                这是slot 插槽内容区域
            </div>
        </template>

    </zs-drawer>
    <!-- 弹窗组件 -->
    <zs-dialog :showdialog.sync="showdialog" @close="close" title="这是弹窗的标题">
        <template>
            <div>这是内容区域
                <div style="position: relative;">
                    <div style="height:700px;background-color: antiquewhite;"></div>
                </div>
            </div>
        </template>
    </zs-dialog>

</div>
</template>

<script>
import ThemeChange from '../components/ThemeChange.vue';
import ZsDialog from '../components/zs-Dialog/zs-Dialog.vue';
import ZsDrawer from '../components/zs-Drawer/zs-Drawer.vue'
import TestNotify from './testNotify.vue';
import Textview from './textview.vue';
export default {
    name: "test-view",
    components: {
        ZsDrawer,
        ThemeChange,
        Textview,
        ZsDialog,
        TestNotify,
  
    },
    data() {
        return {
            curentpath: 'home',
            showdrawer: false,
            showdialog: false

        }
    },
    methods: {
        close(v) {
            console.log('用户点击了关闭');
            console.log(this.showdrawer);
        },
        submit(v) {
            console.log('用户点击了提交');
        },
        cancel(v) {
            console.log('用户点击了取消');

        },
        // 切换中心区域的header面包屑、tabs栏
        centerheader(value) {
            this.$bus.$emit('headercard', value)

        },
        changeView(path) {
            // if(this.curentpath === path) return
            // else this.curentpath = path
            this.$router.push('/'+path)

        }

    }

}
</script>

<style>
.testview {
    padding: 8px;
}

.zs-title1 {
    margin: 8px;
}

.el-row {
    margin: 20px;
}
</style>
