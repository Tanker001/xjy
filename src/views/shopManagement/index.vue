<!-- 商铺管理 -->
<template>
  <div>商铺管理</div>
</template>

<script>
import { getGoodsList } from '@/api/goods'
export default {
  data() {
    return {}
  },
  //  生命周期 - 创建完成（访问当前this实例）
  created() {},
  //  生命周期 - 挂载完成（访问DOM元素）
  async mounted() {
    const { data: res } = await getGoodsList()
    console.log(res)
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
