<!-- 订单管理 -->
<template>
  <div>
    订单统计

    <!-- <el-table :data="tableData" style="width: 100%" height="500px">
      <el-table-column prop="date" label="商户ID"></el-table-column>
      <el-table-column prop="name" label="商户名称"></el-table-column>
      <el-table-column prop="name" label="订单号"></el-table-column>
      <el-table-column prop="address" label="商品列表"></el-table-column>
      <el-table-column prop="date" label="下单时间"></el-table-column>
      <el-table-column prop="name" label="订单总金额"></el-table-column>
      <el-table-column prop="name" label="配送方式"></el-table-column>
      <el-table-column prop="date" label="收货地址/提货人"> </el-table-column>
      <el-table-column prop="name" label="订单状态"> </el-table-column>
      <el-table-column label="操作">
        <el-button type="text" size="mini">查看发货单</el-button>
        <el-button type="text" size="mini">确认发货</el-button>
        <el-button type="text" size="mini">查看订单</el-button>
        <el-button type="text" size="mini">取消订单</el-button>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        orderList:[],
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
</style>
