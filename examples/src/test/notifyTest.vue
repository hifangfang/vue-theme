<!-- 消息通知 -->
<template>
<div>
    <div class="zs-title1">消息通知</div>
    <el-button @click="notify()">点击弹框(不会消除)</el-button>
    <el-button type="success" @click="notify('success','rb')">成功弹框(右下)</el-button>
    <el-button type="danger" @click="notify('error','lt')">点击失败的弹框(左上))</el-button>
    <el-button type="warning" @click="notify('warn','lb')">点击警告的弹框(坐下)</el-button>

    <div>
        <zs-notify-box title="一条普通的通知" content="这是一些普通内容" :duration="0">
        </zs-notify-box>

        <zs-notify-box type="success" title="一条成功的通知" content="这是一些普通内容" :duration="0">
        </zs-notify-box>
        <zs-notify-box type="warn" title="一条警告的通知" content="下面有一个提示按钮" showfooter :duration="0">
        </zs-notify-box>

        <zs-notify-box type="error" title="一条错误的通知" content="这是一些的弧度afghuudhsdhfh弧度的厚度出编号viusvgkcvjkxbvysgkwiwgeuygwdjvsjvcsigvskvusdibvkjsdbdvudfg都会都会好的好速手动或都会都会很俗的粗糙不俗不俗" :duration="0">
        </zs-notify-box>
    </div>
</div>
</template>

<script>
import zsNotifyBox from "../components/zs-Notify/zs-notify-box.vue";
import {  zsNotify } from "../components/zs-Notify/index";

export default {
    components: {
        zsNotifyBox
    },
    methods: {
        notify(type,position) {
            if (type) {
                // zsNotify.success() // zsNotify.error() // zsnotify.warn()
                zsNotify[type]({
                    title: `这是一条${type}的弹框`,
                    content: `<h5>这是自定义的内容<a href="http://www.daidu.com">【点击百度】</a></h5>`,
                    position:position,
                });
            } else {
                zsNotify({
                    title: "这是一个普通标题",
                    content: "这是普通内容",
                    duration: 0,
                });
            }
        },
    },
};
</script>

<style>
</style>
