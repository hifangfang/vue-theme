<template>
<div class="zs-home">
    <!-- 头 -->
    <zs-header-box>
        <!-- 头部菜单插槽 -->
        <zs-tab-menu slot="menu"></zs-tab-menu>
    </zs-header-box>
    <!-- 身 -->
    <div class="zs-wrapper">
        <!-- 侧边栏 -->
        <zs-side-box :collapse.sync="isCollapse">
            <!-- 存放菜单的插槽 -->
            <el-menu :collapse="isCollapse">
                <zs-el-menu :data="sidelist" @itemClick="sideClickInfo"> </zs-el-menu>
            </el-menu>
        </zs-side-box>
        <!-- 中心内容 -->
        <div class="zs-center">
            <div class="zs-center__content">
                <!--  面包屑 //tabs -->
                <div class="zs-center__header">
                    <component :is="headrcards"></component>
                </div>
                <!-- 展示区 -->
                <div class="zs-center__view">
                    <!-- 存放内容区的插槽 -->
                    <template>
                        <router-view />
                    </template>
                </div>
            </div>
            <!-- 尾部内容 -->
            <div class="zs-footer">
                copyright © 2022 浙江臻善科技股份有限公司 All rights reserved
            </div>
        </div>
    </div>

</div>
</template>

<script>

export default {
    name: "HomeView",
    components: {
        "zs-header-box" : ()=> import ("../components/zs-HeaderBox/zs-HeaderBox.vue"), // 头部
        'zs-tab-menu' : () => import ("../components/zs-HeaderBox/zs-tab-menu.vue"), // 头部菜单插槽
        "zs-side-box" : () => import('../components/zs-SideBox/zs-SideBox.vue' ), // 侧边栏
        'zs-el-menu':() => import("../components/zs-SideBox/zs-el-menu.vue"),
        'zs-breadcrumb': ()=> import("../components/zs-BreadCrumb/zs-BreadCrumb.vue"), //面包屑
        'zs-tabs': ()=> import("../components/zs-Tabs/zs-Tabs.vue")


    },
    mounted() {
        this.$bus.$on('headercard',(value)=>{
            this.headrcards = value

        })
    },
    data() {
        return {
            isCollapse: true, // 是否展开
            headrcards:"zs-breadcrumb", // 头部选项卡,
            sidelist:[]

        }

    },
    created() {
        this.getSidelist()
    },

    methods:{
        async getSidelist () {
            this.sidelist = await fetch('/sideMenuData.json').then(res=>res.json())
        },
        sideClickInfo(info) {
            let {option,option:{url}} = info

            // ifame 嵌套跳转
            if(option.isframe) {
                this.$router.push({
                    path:"/home/zs-iframe/"+ info.id + '?url='+url
                })

            }
            else if(url){
                console.log(url);
                this.$router.push({
                    path:"/home"+ url
                })
            }

            console.log(option);

        },
        getItemInfo(value) {
            if(value.url) {
                this.$router.push({
                    path:"/home/zs-ifame"+"?address="+value.url


                })
            }
            // console.log(value);
        }
    }
}
</script>
