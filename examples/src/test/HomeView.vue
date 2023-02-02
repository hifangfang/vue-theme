<template>
<div class="perview">
   <!-- 文本预览 -->
   <texttest></texttest>
   <!-- 按钮测试 -->
   <buttontest></buttontest>
   <!-- 图标测试 -->
   <zsicon-test></zsicon-test>
   <!-- 消息通知测试 -->
   <notify-test></notify-test>
   <zs-table></zs-table>
</div>
</template>

<script>
import Buttontest from './buttonTest.vue'
import NotifyTest from './notifyTest.vue'
import texttest from './textTest.vue'
import ZsiconTest from './zsiconTest.vue'
import ZsTable from "./zstable";
export default {
  components: {ZsTable, texttest, Buttontest,ZsiconTest, NotifyTest },

}
</script>

<style>
:root {
    --info:#1989fa;
}

</style>
