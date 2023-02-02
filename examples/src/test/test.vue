<template>
  <div>
    <div class="zs-header-box">
      <div class="header-box__title">
        <img class="icon" alt="Vue logo" src="../../assets/logo.png" />
        <span>政务中台通用系统</span>
      </div>

      <!-- 菜单 -->
      <div class="header-box__content">
        <zs-tab-menu></zs-tab-menu>
        
      </div>

      <!-- 尾部 -->
      <div class="header-box__footer test">尾巴数据</div>
    </div>
    <div
      style="height: 500px; background-color: antiquewhite"
      @click="okay"
    ></div>
  </div>
</template>

<script>
export default {
   components:{
    "zs-tab-menu": ()=> import ("../components/zs-HeaderBox/zs-tab-menu.vue")
  

    },

  methods: {
    okay() {
      this.$alert("kjiduhg");
    },
    checkMenulength() {

    }
  },
  mounted() {


  }
};
</script>

<style lang="less">
.test {
  background-color: #fff;
}

// .zs-header-box {
//   .zs-menu {
//     width: 100%;
//     height: 100%;

//     .menu-item {
//       display: flex;
//       align-items: center;
//       // flex-wrap: nowrap;
//       cursor: pointer;
//       padding: 0px 8px;
//       // min-width: 60px;
//       border-radius: var(--radius-normal);

//       span {
//         white-space: nowrap; // 单行显示
//       }

//       &:hover {
//         background-color: rgba(255, 255, 255, 0.2);
//       }
//     }
//   }
// }
// .header-box__menu {
//   position: relative;
//   height: auto;
//   color: var(--header-font-color);
//   border: solid 1px #a00202;
//   font-size: var(--font-size-medium);
//   .more {
//     cursor: pointer;
//     height: auto;
//     span {
//       float: right;
//       padding: 0px 10px;
//       line-height: 32px;
//     }
//     &:hover .more-tablist {
//       display: block;
//       background-color: var(--primary8);
//       //   background-color: ;
//     }

//     .more-tablist {
//       position: absolute;
//       // position: fixed;

//       right: 0px;
//       top: 32px;
//       height: 64px;
//       display: none;
//       padding-bottom: 4px;
//       display: none;
//       overflow-y: auto;
//       z-index: 20;
//       /* 垂直滚动条 */
//       li {
//         padding: 6px 10px;
//         border: solid 1px #b0b0b0;
//         margin-top: -1px;
//       }
//     }
//   }
//   .tablist {
//     height: 32px;
//     overflow: hidden;
//     li {
//       float: left;
//       padding: 6px 10px;
//       cursor: pointer;
//       border-right: solid 1px #b0b0b0;
//     }
//   }
// }
.header-box__menu {
  position: relative;
  display: flex;
  .tablist {
    flex: 1;
    display: flex;
    overflow: hidden;
    li {
        padding: 0 10px;
    }
  }
  .morelist {
    background-color: rgb(221, 99, 99);
  }
  
}
</style>
