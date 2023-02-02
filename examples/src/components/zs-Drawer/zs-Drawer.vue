<!-- 抽屉 -->
<template>
    <el-drawer class="zs-drawer " :title="title" :visible.sync="visible" direction="rtl" :size="width+'%'" @close="close">
        <div class="box">
            <div class="zs-drawer__content">
                <slot>这是内容</slot>
            </div>
            
            <div class="zs-drawer__footer">
                <el-button size="small" @click="cancel" >取消</el-button>
                <el-button size="small" type="primary" @click="submit">确定</el-button>
            </div>
        </div>
    </el-drawer>
    </template>
    
    <script>
    export default {
        name: "zs-drawer",
        props: {
            showdrawer: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: "",
            },
            width: {
                type: Number,
                default: ()=>{
                    console.warn('传入窗口百分比（0-80）的number');
                    return 42
                },
    
            }
        },
        watch: {
            showdrawer(v) {
                console.log(v);
                this.visible = v
    
            },
            // visible(v) {
            //     this.$emit('isDrawer:update',v)
    
            // },
            //     table(v) {
            //         this.$emit('isDrawer:update',v)
    
            //     }
    
        },
        data() {
            return {
                visible: null
                // table: this.showdrawer
    
            }
    
        },
        created() {
            this.visible = this.showdrawer
        },
        methods: {
            close() {
                this.$emit('update:showdrawer', false)
                this.$emit('close', '关闭了')
            },
            submit(){
                this.$emit('update:showdrawer', false)
                this.$emit('submit', '确定')
            },
            cancel() {
                this.$emit('update:showdrawer', false)
                this.$emit('submit', '取消')
    
            }
        }
    
    }
    </script>
<style lang="less">
.zs-drawer {
    .el-drawer {
        background-color: var(--background-color);

        .el-drawer__header {
            // font-size: var(--font-color-primary);
            color: var(--font-color-primary);
            font-size: var(--font-size20);
            font-weight: var(--font-weight-bolder);
            padding: 8px 16px;
            margin-bottom: 4px;
        }
    }

    .box {

        box-sizing: border-box;
        margin: 8px 16px;

        display: flex;
        flex-direction: column;
        width: calc(100% - 32px);
        height: calc(100% - 16px);
        overflow: hidden;

        .zs-drawer__content {
            flex: 1;
            background-color: var(--background-color1);
            border-radius: var(--radius-normal);
            color: var(--font-color-primary);
            padding: 8px;
            overflow: auto;
        }

        .zs-drawer__footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 8px;
        }

    }

}
</style>