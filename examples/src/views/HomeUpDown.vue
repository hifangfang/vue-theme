<template>
<!-- 上下布局 -->
<div class="zs-home">
    <!-- 头 -->
    <zs-header-box>
        <!-- <template slot="menu">
        <zs-tab-menu></zs-tab-menu>
      </template> -->
    </zs-header-box>
    <div class="zs-center">
        <div class="zs-center__content ">
            <!-- 头  -->
            <div class="zs-center-header">
                <zs-tabs></zs-tabs>
            </div>
            <!-- 内容区 -->
            <div class="zs-center__view ">
                <router-view></router-view>
            </div>

        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "homeUpDown",
    components: {
        "zs-header-box": () => import("../components/zs-HeaderBox/zs-HeaderBox.vue"),
        "zs-tab-menu": () => import("../components/zs-HeaderBox/zs-tab-menu.vue"),
        'zs-tabs': () => import("../components/zs-Tabs/zs-Tabs.vue")
    },
    data() {
        return {};
    },
};
</script>
