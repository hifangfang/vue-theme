<template>
  <div>
    <template v-for="item in data">
      <el-submenu :key="item.id" v-if="item.children && item.children.length" :index="item.id">
        <div class="zs-menu-title" slot="title">
          <div class="icon" :class="item.icon">
        </div>
          <div class="label">{{ item.label }}</div>
        </div>
        <zs-el-menu :data="item.children" @itemClick="eventoFather"></zs-el-menu>
      </el-submenu>
      <el-menu-item v-else :key="'singe'+item.id" :index="item.id"
      ><div class="zs-menu-title" @click="clickevent(item)">
          <div class="icon" :class="item.icon"></div>
          <div class="label">{{ item.label }}</div>
        </div>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "zs-el-menu",
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      menuType: "",
    };
  },
  methods:{
    clickevent(value) {
      this.$emit('itemClick',value)
    },
    eventoFather(value) {
      this.clickevent(value)
    }
  }
  //   created() {
  //     if (this.data.children && this.data.children.length) {
  //       this.menuType = "el-submenu";
  //     } else this.menuType = "el-menu-item";
  //   },
  //   watch: {
  //     data(v) {
  //       if (v.children && v.children.length) {
  //         this.menuType = "el-submenu";
  //       } else {
  //         this.menuType = "el-menu-item";
  //       }
  //     },
  //   },
};
</script>

<style>
</style>