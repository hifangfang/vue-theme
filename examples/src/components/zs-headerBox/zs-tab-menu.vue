<template>
  <div class="zs-tab-menu" ref="zs-tab-menu">
    <!-- 展示区 -->
    <ul class="zs-tab-menu__tablist" @click="clickprop">
    </ul>
    <!-- 更多数据 -->
    <div class="zs-tab-menu__morelist">
      <div class="zs-tab-menu__morebtn">··· 更多</div>
      <ul class="__moretabs"></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "zs-tab-menu",
  data() {
    return {
      showlist: [],
      morelist: [],
      menuData: [
        { title: "菜单数据1", icon:"el-icon-s-goods", children: [{ title: "nonoe" }] },
        { title: "菜单数据2", icon:"el-icon-video-camera", children: [{ title: "nonoe" }] },
        { title: "菜单数据3", icon:"el-icon-s-ticket", children: [{ title: "nonoe" }] },
        { title: "菜单数据4", icon:"el-icon-s-shop", children: [{ title: "nonoe" }] },
        { title: "菜单数据05",icon:"el-icon-s-opportunity",  children: [{ title: "nonoe" }] },
        { title: "菜单数据06",icon:"el-icon-goblet-square-full",  children: [{ title: "nonoe" }] },
        { title: "菜单数据07",icon:"el-icon-s-goods",  children: [{ title: "nonoe" }] },
        // { title: "菜单数据08", children: [{ title: "nonoe" }] },
        // { title: "菜单数据04", children: [{ title: "nonoe" }] },
        // { title: "菜单数据05tabItem05", children: [{ title: "nonoe" }] },
        // { title: "菜单数据06", children: [{ title: "nonoe" }] },
        // { title: "菜单数据07", children: [{ title: "nonoe" }] },
        // // { title: "tabItem08", children: [{ title: "nonoe" }] },
      ],
    };
  },
  methods: {
    changeMenulist(originData) {
      // 能展示的tab
      let maintabs = this.$refs["zs-tab-menu"],
        showtabs = maintabs.querySelector(".zs-tab-menu__tablist"),
        moretabs = maintabs.querySelector(".zs-tab-menu__morelist"),
        morecards = moretabs.querySelector(".__moretabs"),
        maxlength = maintabs.getBoundingClientRect().width,
        curentlength = 90,
        num = 0,
        strHtml = "";
      // console.log(maxlength); // 

      originData.forEach((item, index) => {
        strHtml += `
            <li>
             <div class="zs-tab-title">
              <i class="el-icon-s-goods"></i>
              <span>${item.title}</span>
              </div>
            </li>
            `;
      });
      showtabs.innerHTML = strHtml;
      // console.log(showtabs.children);
      Array.prototype.forEach.call(showtabs.children, (node, index) => {
        let width = node.getBoundingClientRect().width;
        curentlength += width;
        if (maxlength > curentlength) {
          moretabs.style.display = "none";
          num = index;
        } else {
          moretabs.style.display = "block";
          moretabs.style.zIndex = 999;
        }
      });
      showtabs.innerHTML = "";
      morecards.innerHTML = "";

      originData.forEach((item, index) => {
        let htmlstr = `
            <li>
             <div class="zs-tab-title">
              <i class="${item.icon}"></i>
              <span> ${item.title}</span>
              </div>
            </li>
            `;
        if (index <= num) {
          showtabs.innerHTML += htmlstr;
        } else {
          morecards.innerHTML += htmlstr;
        }
      });
    },
    // 点击事件
    clickprop(ev) {
      console.log(ev);

    }
  },
  mounted() {
    this.changeMenulist(this.menuData);
    window.onresize = () => {
      this.changeMenulist(this.menuData);
    };
  },
};
</script>

<style lang="less">
.zs-tab-menu {
  width: 100%;
  height: 56px;
  position: absolute;
  top:0;

  display: flex;
  align-items: center;
  .zs-tab-title {
    cursor: pointer;
    box-sizing: border-box;
    height: 36px;
    line-height: 36px;
    border-radius: var(--radius-normal);
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin-right:8px ;
    
    white-space: nowrap;
    i {
          margin-right:5px ;
        }
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  // 展示区
  .zs-tab-menu__tablist {
    flex: 1;
    // height: 32px;
    // line-height: 32px;
    display: flex;
    overflow-x: hidden;
  }
  // 更多内容
  .zs-tab-menu__morelist {
    height: inherit;
    // border: 1px solid;
    width: 100px;
    position: relative;
    // background-color: rgba(135, 39, 55, 0.538);
    .zs-tab-menu__morebtn {
      width: 100px;
      box-sizing: border-box;
      // background-color: rgba(48, 53, 185, 0.563);
      // padding: 0 12px;
      text-align: center;
      height: 36px;
      line-height: 36px;
      margin-top: 10px ;
      margin-bottom:10px ;
      border-radius: 4px;
      // height: 56px;
      // line-height: 56px;
    }
    .__moretabs {
      position: absolute;
      top: 56px;
      left: 0;
      display: none;
      // width: inherit;
      // text-align: center;
      // min-width: 160px;
      // margin-top: 18px;
      background-color: var(--primary8);
      border-radius: var(--radius-normal);
      max-height: 260px;
      overflow-y: auto;
      .zs-tab-title {
        margin-right:0 ;
        margin: 5px;
        // display: flex;
        // justify-content: center;
   
      }
      // li {
      //   margin-top:10px ;
      //   width: inherit;
      // }
      //   .zs-tab-title {
      //     width: calc(100% - 6px);
      //   }
    }
    &:hover {
      .zs-tab-menu__morebtn {
   
        background-color: rgba(255, 255, 255, 0.2);
        // font-weight: var(--font-weight-bolder);
      }
      .__moretabs {
        display: block;
      }
    }
  }
}
</style>