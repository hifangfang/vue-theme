<template>
  <div class="textTest">
    <div class="zs-title1">文本预览</div>
    <div style="display:flex;">
            <div style="flex:1">
                <div class="zs-title1">这是一级标题--title1</div>
                <div class="zs-title2">这是二级标题--title2</div>
                <div class="zs-title3">这是三级标题--title3</div>
            </div>
            <div style="flex:1">
                <div class="zs-title1 zs-bolder">这是一级标题-加粗效果--title1 --bolder</div>
                <div class="zs-title2 zs-bolder">这是二级标题 加粗效果--title2 -- xx-bolder</div>
                <div class="zs-title3 zs-bolder">这是三级标题 加粗效果--title3 -- xx-bolder</div>
    
            </div>
        </div>
    <div style="margin-top:10px; border: 1px;">
        <p>这是普通正文：这是p 标签 ，下面是element 几种状态按钮的颜色适配</p>
        <p class="zs-bolder">这是普通正文：这是p 标签 ，下面是element 几种状态按钮的颜色适配 加粗效果-</p>
        <p class="zs-tiny-text">--tiny-text小标签内等辅助文字</p>
  

    </div>
  </div>
</template>

<script>
export default {
    name:"textTest"

}
</script>
