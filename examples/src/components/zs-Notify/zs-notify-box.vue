<template>
  <!-- 通知盒子 -->
  <div class="zs-notify-box" :class="[type, position]">
    <div class="zs-notify__title">
      <i class="el-icon-warning"></i>
      <span class="zs-textOneline">{{ title }}</span>
      <i class="el-icon-close zs-notify--close" @click="remove"> </i>
    </div>
    <div class="zs-notify__content" v-html="content">
      <!-- <slot></slot> -->
      <!-- 这是内容体 -->
      <!-- 这是一段超级超级超级长度的文字，这是一段超级超级超级长度的文字，这是一段超级超级超级长度的文字，消息通知文字，文字较多文字较多文字较多文字较多文字文字较多文字较多文字较多文字较多文字文字较多文字较多文字较多文字较多文字文字较多文字 -->
    </div>
    <div class="zs-notify__footer" v-if="showfooter">
      <!-- <slot name="footer"></slot> -->
      <div class="zs-button primary">我知道了</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zs-notify-box",
  props: {
    type: {
      type: String,
      default: () => {
        // 通知状态类型
        // warn  error  success  default('')
        return "";
      },
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      default: () => {
        return "";
      },
    },
    showfooter: {
      type: Boolean,
      default: false,
    },
    // 持续时间
    duration: {
      type: Number,
      default: 3000, // 持续时间
    },
    // 通知位置
    position: {
      type: String,
      default: "rt",
    },
  },
  methods: {
    remove() {
      this.$el.classList.add('zs-remove')
      setTimeout(()=>{
        this.$el.parentNode.removeChild(this.$el);
      },300)
    },
  },
  mounted() {
    if (this.duration !== 0) {
      this.$nextTick(()=>{
        setTimeout(() => this.remove(), this.duration);
      })
    }
  },
};
</script>

<style lang="less">
@keyframes zsl2r {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes zsr2l {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translate(0);
  }
}
.zs-notify-box {
  margin-top: 10px;
  box-sizing: border-box;
  transform: translate(0);
  width: 400px;
  padding: 16px;
  font-size: var(--font-size-medium);
  transition: 0.4s;
  z-index: 999;

  background-color: var(--background-color);
  border-radius: var(--radius-normal);
  box-shadow: 0px 3px 8px 8px var(--primary2);
  display: flex;
  flex-direction: column;

  .zs-notify__title {
    height: 24px;
    line-height: 24px;
    align-items: center;

    // font-weight: var(--font-weight-bolder);
    font-weight: 500;
    display: flex;
    justify-content: space-between;

    i {
      font-size: 18px;
      color: var(--primary);
    }

    span {
      margin: 0 8px;
      flex: 1;
    }

    .zs-notify--close {
      cursor: pointer;
    }
  }

  .zs-notify__content {
    flex: 1;
    font-size: var(--font-size-primary);
    line-height: 20px;
    color: var(--font-color-secondary);
    margin-top: 12px;
    margin-left: 28px;
    max-height: 62px;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .zs-notify__footer {
    margin-top: 12px;
    height: 32px;
    line-height: 32px;
    display: flex;
    justify-content: right;

    .zs-button {
      padding: 0 16px;

      cursor: pointer;
      // background-color: pink;
    }

    // background-color: pink;s
  }

  &.success {
    .zs-notify__title {
      i {
        color: var(--success);
      }
    }

    box-shadow: 0px 3px 8px 8px var(--success-plain);
  }

  &.warn {
    .zs-notify__title {
      i {
        color: var(--warning);
      }
    }

    box-shadow: 0px 3px 8px 8px var(--warning-plain);
  }

  &.error {
    .zs-notify__title {
      i {
        color: var(--danger);
      }
    }

    box-shadow: 0px 3px 8px 8px var(--danger-plain);
  }
  // 动画
  &.rt {
    top: 30px;
    right: 10px;
    animation: zsl2r 0.3s ease-in-out;
    // animation: name duration timing-function delay iteration-count direction fill-mode;
  }
  &.rb {
    bottom: 5px;
    right: 10px;
    animation: zsl2r 0.3s ease-in-out;
  }
  &.lt {
    top: 20px;
    left: 10px;
    animation: zsr2l 0.3s ease-in-out;

  }
  &.lb {
    bottom: 16px;
    left: 10px;
    animation: zsr2l 0.3s ease-in-out;

  }
  &.zs-remove {
    transform: translate(100%);
    opacity: 0;
    animation-direction:reverse;
  }
}
</style>
