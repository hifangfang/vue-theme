<!-- 面包屑 -->
<template>
<div class="zs-Breadcrumb">
    <ul class="zs-bread-crumb">
        <li class="zs-bread-crumb-item" @click="topage('/')">首页</li>
        <li class="zs-bread-crumb-item">文本预览</li>
        <li class="zs-bread-crumb-item">活动列表</li>
        <li class="zs-bread-crumb-item">当前首页</li>
    </ul>
</div>
</template>

  
<script>
export default {
    name: "zs-Breadcrumb",
    methods:{
      topage(path) {
        this.$router.push(path)
      }
    }

};
</script>
