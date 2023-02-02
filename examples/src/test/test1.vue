<template>
    <div class="side-box column-left">
        <div class="resize-bar"></div>
        <div class="resize-line"></div>
        <div class="resize-save">
            左侧的内容，左侧的内容，左侧的内容，左侧的内容
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'side-box'
    
    }
    </script>
    
    <style lang="less">
    // .side-box {
    //     width: 200px;
    //     min-width: 160px;
    //     max-width: 260px;
    //     margin-top: 1px;
    //     height: calc(100% - 1px);
    //     background-color: var(--fill-side);
    // }
    .column-left {
        height: 400px;
        // height: calc(100% - 1px);
        background-color: var(--fill-side);
        position: relative;
        // float: left;
    }
    .resize-save {
        position: absolute;
        top: 0; right: 5px; bottom: 0; left: 0;
        padding: 16px;
        overflow-x: hidden;
    }
    .resize-bar {
        width: 200px; height: inherit;
        resize: horizontal;
        cursor: ew-resize;
        cursor: col-resize;
        opacity: 0;
        overflow: scroll;
    }
    /* 拖拽线 */
    .resize-line {
        position: absolute;
        right: 0; top: 0; bottom: 0;
        border-right: 2px solid #eee;
        border-left: 1px solid #bbb;
        pointer-events: none;
    }
    .resize-bar:hover ~ .resize-line,
    .resize-bar:active ~ .resize-line {
        border-left: 2px solid var(--primary);
    }
    .resize-bar::-webkit-scrollbar {
        width: 200px; height: inherit;
    }
    
    /* Firefox只有下面一小块区域可以拉伸 */
    @supports (-moz-user-select: none) {
        .resize-bar:hover ~ .resize-line,
        .resize-bar:active ~ .resize-line {
            border-left: 1px solid #bbb;
        }
        .resize-bar:hover ~ .resize-line::after,
        .resize-bar:active ~ .resize-line::after {
            content: '';
            position: absolute;
            width: 16px; height: 16px;
            bottom: 0; right: -8px;
            // background: url(./resize.svg);
            background-size: 100% 100%;
        }
    }
    </style>
    