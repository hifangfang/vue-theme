<template>
<div class="zs-dialog">
    <el-dialog :title="title" 
      width="70%" 
      :visible.sync="myDialog" @closed="closed" top="10vh">
        <div class="zs-dialog__content">
            <slot></slot>
        </div>
        <!-- 尾部内容 -->
        <div v-if="showfooter" slot="footer" class="dialog-footer">
            <el-button size="small" @click="cancle">取 消</el-button>
            <el-button size="small" type="primary" @click="submit">确定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: "zs-dialog",
    props: {
        showdialog: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: ""
        },
        showfooter: {
            type: Boolean,
            default: true
        }

    },
    data() {
        return {
            myDialog: false

        }
    },
    watch: {
        showdialog(value) {
            if (value) this.myDialog = true
        }

    },
    methods: {
        // 关闭啦
        closed() {

            this.$emit('update:showdialog', false)

        },
        // 确定
        submit() {
            this.$emit('submit')
            this.myDialog = false

        },
        // 取消
        cancle() {
            this.$emit('cancel')
            this.myDialog = false

        }

    },
    created() {
        this.isDialog = this.myDialog
    },

}
</script>
