<!-- iframe 嵌套盒子 -->
<template>
<div class="zs-iframe">
    <iframe name="zs-iframe" :src="src" frameborder="0"></iframe>
</div>
</template>

<script>
export default {
    name: "zs-iframe",
    data() {
        return {
            src :''
        }

    },
    created() {
        this.src = this.$route.query.url
    },
    mounted() {
        window.addEventListener("message", this.getSonMessage)
        console.log(this.$route);
    },
    watch:{
        '$route': {
            deep: true,
            handler(val) {
                let src  = val.query.url
                this.src = src
                console.log(this.src);
            }
          
        }

    },
    methods: {
        // 接收子iframe的数据信息
        getSonMessage(val) {
            if(val.data.name === 'zs-theme' && val.data.type === 'postFather' ) {
                let data = val.data.data
                console.log('子iframe想调用该框架的一些插件');
                console.log(data);
            }
            return
        },
        // 传递消息给ifame
        // postSonMessage() {
        //   window.frames['zs-iframe'].postMessage({
        //     content:"来自你爹的信息"
        //   },'*')
        // }

    },

};
</script>

<style lang="less" scoped>
.zs-iframe {
    width: 100%;
    height: 100%;

    iframe {
        width: 100%;
        height: 100%;
    }
}
</style>
