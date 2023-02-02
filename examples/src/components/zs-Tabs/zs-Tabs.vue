<template>
  <div class="zs-tabs">
    <ul>
      <li
        class="zs-tab-item"
        v-for="(item, index) in tablist"
        :key="index"
        :class="{ 'zs-active': activeName === item.label }"
        @click="clickIt(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  name: "zs-tabs",
  data() {
    return {
      activeName: "用户管理",
      tablist: [
        { label: "用户管理" },
        { label: "第二条数据" },
        { label: "第三条数据" },
        { label: "第四条数据哦" },
      ],
    };
  },
  methods: {
    clickIt(obj) {
      this.activeName = obj.label;
      console.log(this.$router);
    },
  },
};
</script>
  
  <style lang="less">
</style>
  