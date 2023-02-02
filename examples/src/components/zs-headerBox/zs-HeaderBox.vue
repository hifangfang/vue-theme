<template>
  <div class="zs-header-box">
    <!-- 标题 -->
    <div class="header-box__title">
      <img class="zs-icon" alt="Vue logo" src="../../assets/logo.png" />
      <span>政务中台通用系统</span>
    </div>

    <!-- 菜单中心内容 -->
    <div class="header-box__content">
      <slot name="menu">
        
      </slot>
    </div>

    <!-- 尾部 -->
    <div class="header-box__footer">
      <!-- 调色盘 -->
      <el-popover placement="top" width="220" v-model="themeVisible">
        <!-- 填充的内容 -->
        <div>
          <theme-change></theme-change>
        </div>
        <template slot="reference">
          <!-- 小红点 -->
          <div class="zs-icon">
            <div class="zs-hot-num">3</div>
            <i class="el-icon-set-up"></i>
          </div>
        </template>
      </el-popover>

      <!-- 小红点 -->
      <div class="zs-icon">
        <div class="zs-hot"></div>
        <i class="el-icon-bell"></i>
      </div>

      <el-dropdown :hide-on-click="false">
        <div class="zs-icon">
          <div class="zs-hot-num">12</div>
          <i class="el-icon-setting"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置一</el-dropdown-item>
          <el-dropdown-item>设置二</el-dropdown-item>
          <el-dropdown-item>设置三</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <!-- 用户信息 -->
      <div class="userinfo" @click="showdrawer = true">
        <div class="zs-icon">
          <i class="el-icon-user"></i>
        </div>
        <span>用户名称</span>
      </div>
    </div>

    <!-- 弹窗--（个人信息） -->
    <zs-drawer title="我的信息" :showdrawer.sync="showdrawer" :width="20">
      <template>
        <div>这是个人用户信息=--------</div>
      </template>
    </zs-drawer>
  </div>
</template>

<script>
import ThemeChange from "../ThemeChange.vue";
import ZsDrawer from "../zs-Drawer/zs-Drawer.vue"
export default {
  name: "zs-header-box",
  components: {
    ThemeChange,
    ZsDrawer,
  },
  data() {
    return {
      themeVisible: false, // 是否展示主题切换组件
      showdrawer: false, // 是否展示弹框用户信息
    
    };
  },
  methods: {
    // checklength() {
    //     var header = document.querySelector(".zs-header-box"),
    //         header_content = header.querySelector(".header-box__content");
    //     var length = header_content.getBoundingClientRect().width;
    //     console.log(length);
    // },
  },

  // 获取可用的长度
  mounted() {
    // this.checklength();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
//element-ui
.zs-header-box {
    .el-dropdown {
      display: inline-block;
      position: relative;
      color: var(--header-font-color);
      font-size: var(--font-size-big);
    }
    .header-box__content {
      // 覆盖菜单
  
      .el-tabs {
        // height: inherit;
        margin: auto;
        box-sizing: border-box;
        overflow: hidden;
        i {
          font-size: var(--font-size20);
          color: var(--header-font-color);
        }
  
        .el-tabs__nav-next,
        .el-tabs__nav-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          line-height: normal;
          /* line-height: 44px; */
        
          color: #909399;
          i {
            font-size: 16px;
          }
        }
  
        &.el-tabs--top {
          // background-color: #fff;
          .el-tabs__header {
            padding: 0;
            margin: 0;
          }
        }
  
        .el-tabs__item {
          margin-right:16px ;
          // margin: 0 8px;
          // padding: 0;
          padding: 8px 12px 8px 12px;
          height: auto;
          overflow: hidden;
          line-height: 1;
          font-size: var(--font-size-medium);
          color: var(--header-font-color);
          border-radius: var(--radius-normal);
          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
          &:last-child {
            margin-right: 0px;
          }
        }
  
        .el-tabs__active-bar {
          display: none;
        }
  
        // 选中样式
        .el-tabs__item.is-active {
          i {
          }
  
          font-weight: var(--font-weight-bolder);
          background-color: rgba(255, 255, 255, 0.3);
        }
  
        // 下划线横条
        .el-tabs__nav-wrap::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0px; // 2
          //   background-color: #e4e7ed;
          background-color: transparent;
          // z-index: 1;
        }
      }
    }
  }

</style>