<template>
  <!-- 侧边栏 --支持el-menu 插槽 -->
  <div
    class="zs-side-box"
    ref="zs-side-box"
    :class="{ 'side-box--Collapse': collapse }"
  >
    <div class="side-box__content">
      <div class="side-box__header" v-if="$slots.header">
        <slot name="header"></slot>
        <div
          v-if="collapseIcon"
          class="side-toggle"
          ref="collapseIcon"
          @click="togglechange"
        ></div>
      </div>
      <div class="side-box__body zs-scrollbar">
        <slot></slot>
        <!-- 显示toggle折叠图标 -->
      </div>
      <div class="side-box__footer">
        <!-- // 侧边栏尾部插槽 -->
        <slot name="footer">
          <i
            @click="collapsechange"
            class="zs-side-box__footericon"
            :class="
              collapse === false
                ? 'el-icon-d-arrow-left'
                : 'el-icon-d-arrow-right'
            "
          ></i>
        </slot>
      </div>
    </div>
    <div class="side-moving" :class="{'side-show':!collapse}"></div>
  </div>
</template>

<script>
export default {
  name: "zs-side-box",
  // 接收collapase 通知 是否可折叠
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
    defaultWidth: {
      type: Number,
      default: () => {
        console.warn("默认展开宽度");
        return 180;
      },
    },
    // 显示折叠图标
    collapseIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      origin: 180,
    };
  },
  created() {
    this.origin = this.defaultWidth;
  },
  mounted() {
    // this.dragControllerDiv();
    // 折叠图标绑定拉伸试讲
    this.dargControll();
  },
  watch: {
    collapse(value) {
      this.$nextTick(() => {
        this.changeWidth(value);
      });
    },
  },
  methods: {
    collapsechange() {
      let value = !this.collapse;
      this.$emit("update:collapse", value);
    },
    dragControllerDiv() {
      var left = document.querySelector(".zs-side-box");
      var resize = left.querySelector(".side-moving");
      var elmenu = left.querySelector(".el-menu");

      if (left) {
        left.onmousedown = (e) => {
          if (this.collapse) return;

          var startX = e.clientX;
          resize.left = resize.offsetLeft;
          // 鼠标拖动事件
          document.onmousemove = (e) => {
            //颜色改变提醒
            resize.style.opacity = 1;
            var endX = e.clientX;
            var moveLen = resize.left + (endX - startX);
            if (moveLen < 160) moveLen = 160; // 左边区域的最小宽度为120px
            // if (moveLen > 280) moveLen = 280
            this.origin = moveLen;
            // resize.style.left = moveLen; // 设置左侧区域的宽度
            left.style.width = moveLen + "px";
            if (elmenu) {
              elmenu.style.width = moveLen - 8 + "px";
            }
          };
          document.onmouseup = (evt) => {
            //颜色恢复
            resize.style.opacity = "";
            document.onmousemove = null;
            document.onmouseup = null;
            resize.releaseCapture && resize.releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
          };
          resize.setCapture && resize.setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
          return false;
        };
      }
    },
    // 拖拽控制
    dargControll() {
      var root = this.$refs["zs-side-box"],
        resize = root.querySelector(".side-moving"),
        box = root.querySelector(".side-box__content");

      resize.onmousedown = (e) => {
        // 判断当前状态是关闭还是展开 
        if(this.collapse) return
        resize.style.cursor = 'col-resize'
      
        var startX = e.clientX;
        // 记录left值
        resize.left = resize.offsetLeft;
        document.onmousemove = (e) => {
          resize.style.cursor = 'col-resize'
          resize.style.opacity= 1
          var endX = e.clientX;
          var moveLen = resize.left + (endX - startX);
          if (moveLen < 160) moveLen = 160; // 左边区域的最小宽度为120px
          // if (moveLen > 280) moveLen = 280
          this.origin = moveLen;
          box.style.width = moveLen + "px";
        };
        document.onmouseup = (evt) => {
          //颜色恢复
          resize.style.opacity = "";
          resize.style.cursor = ''
          document.onmousemove = null;
          document.onmouseup = null;
          resize.releaseCapture && resize.releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
        };
        resize.setCapture && resize.setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
        return false;
      };

      // var resize = left.querySelector(".side-moving");
    },
    togglechange() {
      this.collapsechange();
    },
    clearpadding() {
      let list =
        this.$refs["zs-side-box"].querySelectorAll(".el-submenu__title");
      console.log(list);
      // let arr = [...list]
      list.forEach((item) => {
        console.log(item);
        console.log(item.style.paddingLeft);
        item.style.paddingLeft = "0px";
      });
    },
   
    changeWidth(flag) {
      // falg 为 true 关闭 状态 false 展开状态
      let root = this.$refs["zs-side-box"]
      if(root) {
          let node = root.querySelector('.side-box__content')
          console.log(this.origin);
          node.style.width =  flag ? '' : (this.origin + 'px' )
        }
    },
  },
};
</script>
<style lang="less">
// 展开状态
.zs-side-box {
  .side-box__body>.el-menu {
    padding: 2px 8px;
  }

  .el-menu {
    box-sizing: border-box;
    width: 100%;
    border-right: 0;
    background-color: inherit;

    i {
      font-size: var(--font-size-medium);
      color: var(--side-font-color);
    }

    .el-submenu__title,
    .el-menu-item {
      margin: 0 !important;
      margin-top: 12px !important;
      padding: 10px 8px !important;
      position: relative;
      height: auto;
      line-height: normal;
      min-width: 0;
      border-radius: var(--radius-normal);
      white-space: normal;
      color: var(--side-font-color);
      &:focus,
      &:hover {
        outline: 0;
        color: var(--side-font-hover-color);
        background-color: var(--side-hover-color) !important;
      }


      &.is-active {
        font-weight: 600;
        background-color: var(--side-active-color) !important;
        box-shadow: 0px 4px 12px var(--primary) !important;
        .zs-menu-title {
          color: var(--header-font-color);

        }



      }
    }

    // 嵌套情况
    .el-menu--inline {
      padding-left:16px !important ;
      .zs-menu-title {
        // background-color: #fff;
        // margin-left: 8px !important;
        // padding-left: 8px !important;
      }
      // .zs-menu-title {
      //   margin-left: 8px !important;
      // }
    }

    //  有子菜单时候
    .el-submenu__title {
      display: flex;
      align-items: center;

      .zs-menu-title {
        flex: 1;
        overflow: hidden;
      }

      .el-submenu__icon-arrow {
        width: 24px;
        height: 36px;
        line-height: 36px;
        position: static;
      }


    }

    .zs-menu-title {
      .label {
        margin-left: 8px !important;
      }
    }
  }

  // 折叠状态
  &.side-box--Collapse {
    .el-menu--collapse.el-menu {
      .el-submenu.is-active {
        .el-submenu__title {
          .zs-menu-title {
            color: var(--header-font-color);
          }

          background-color: var(--primary);
          box-shadow: 0px 4px 12px var(--primary);
        }
      }

      .el-submenu__title {
        .el-submenu__icon-arrow {
          display: none;
        }
      }

      .zs-menu-title {
        .icon {
          margin: 0 auto !important;
        }
      }

    }
  }

}
// 气泡效果
.el-menu--vertical {
  .el-menu.el-menu--popup {
    .zs-menu-title {
      color: #333;
    }
  }
}

</style>
