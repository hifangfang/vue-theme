<template>
  <!-- 左右布局 -->
  <div class="zs-home">
    <div class="zs-wrapper">
      <!-- 侧边栏 -->
      <zs-side-box :collapse.sync="collapse" :defaultWidth="300" collapseIcon>
        <!-- 侧边栏头部插槽 -->
        <template slot="header">
          <div class="zs-icon">
            <img alt="Vue logo" src="../assets/logo.png" />
          </div>
          <div class="zs-title1">政务中台通用系统</div>
        </template>
        <!-- 存放菜单的插槽 -->
        <template>
          <el-menu :collapse="collapse">
            <zs-el-menu :data="sidelist"></zs-el-menu>
          </el-menu>
        </template>
      </zs-side-box>

      <!-- 右边内容 -->
      <div class="zs-center">
        <div class="zs-center__content">
          <!-- 头部导航 -->
          <div class="zs-center__header">
            <zs-breadcrumb></zs-breadcrumb>
          </div>
          <!-- 内容展示 -->
          <div class="zs-center__view">
            <router-view></router-view>
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
  name: "homeRightLeft",

  components: {
    "zs-header-box": () =>import("../components/zs-HeaderBox/zs-HeaderBox.vue"),
    "zs-side-box": () => import("../components/zs-SideBox/zs-SideBox.vue"), // 侧边栏
    "zs-el-menu": () => import("../components/zs-SideBox/zs-el-menu.vue"),
    "zs-breadcrumb": () =>
      import("../components/zs-BreadCrumb/zs-BreadCrumb.vue"), //面包屑
  },
  data() {
    return {
      collapse: true,
      sidelist: [
        {
          id: "1",
          icon: "el-icon-setting",
          label: "菜单一",
          option: [],
          children: [
            { id: "11", icon: "el-icon-document", label: "菜单1.1" },
            {
              id: "12",
              icon: "el-icon-document",
              label: "菜单1.2sssssssssssssssssss",
            },
            {
              id: "13",
              icon: "el-icon-document",
              label: "菜单1.3cdvvvvvvvvvvvvvv",
              children: [
                { id: "131", icon: "el-icon-document", label: "菜单1.3.1" },
                { id: "133", icon: "el-icon-document", label: "菜单1.3.2" },
              ],
            },
          ],
        },
        { id: "76", icon: "el-icon-phone", label: "菜单88", option: [] },
        {
          id: "2",
          icon: "el-icon-phone",
          label: "菜单一",
          option: [],
          children: [
            { id: "21", icon: "el-icon-document", label: "菜单1.1" },
            { id: "22", icon: "el-icon-document", label: "菜单1.2" },
            {
              id: "23",
              icon: "el-icon-phone",
              label: "菜单1.3",
              children: [
                { id: "146", icon: "el-icon-document", label: "菜单1.3.1" },
                { id: "144", icon: "el-icon-document", label: "菜单1.3.2" },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

