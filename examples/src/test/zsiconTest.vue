<template>
    <div class="zsiconTest">
        <div class="zs-title1">zsicon 图标</div>
        <div class="content">
            <div class="testicon" v-for="item in iconList" :key="item.icon_id">
                <i :class="'zsicon-' + item.font_class"></i>
                <span>{{ 'zsicon-' + item.font_class }}</span>
            </div>
        </div>
        <div class="zs-title1">svg 图标</div>
        <div class="content">
            <div class="testicon" v-for="item in iconList" :key="item.icon_id">
                <svg class="zs-svg" aria-hidden="true">
                    <use :xlink:href="'#zsicon-' + item.name"></use>
                </svg>
                <span>{{'#zsicon-' + item.name}}</span>
            </div>
        </div>


    </div>

</template>

<script>
import iconfont from '../assets/fonts/iconfont.json'
export default {
    data() {
        return {
            iconList: []
        }
    },
    created() {
        this.getIconList()
    },
    methods: {
        async getIconList() {
            const { glyphs } = iconfont;
            this.iconList = glyphs
        }
    },

}
</script>

<style lang="less">
.zsiconTest {
    .content {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;

        .testicon {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 100px;

            // height: 30px;
            i {
                font-size: 20px;
                color: var(--primary);
            }

            span {
                min-height: 28px;
                margin: 8px auto;
                font-size: 12px;
                // color: var(--primary5);
            }
            &:hover {
                i {
                    font-size: 40px;
                }
                span {display: none;}
            }
        }


    }

}

.zs-svg {
    margin: auto;
    width: 1em;
    // display: inline-block;
    // width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
