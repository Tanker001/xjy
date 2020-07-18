<!-- 订单管理 -->
<template>
  <div>
    <el-table :data="orderlist" style="width: 100%" height="500px">
      <el-table-column prop="order_num" label="商户ID"></el-table-column>
      <el-table-column prop="merchant_name" label="商户名称"></el-table-column>
      <el-table-column prop="merchant_id" label="订单号"></el-table-column>
      <el-table-column label="商品列表" #default="{row}">
        <!-- 这里使用插槽 -->
        <div class="li" v-for="(v, i) in row.goods_list" :key="i">
          {{ v.slice(0, 3) +' '+ v.slice(-7, -1) }}
        </div>
      </el-table-column>
      <el-table-column prop="order_time" label="下单时间"></el-table-column>
      <el-table-column prop="ordercost" label="订单总金额"></el-table-column>
      <el-table-column prop="sendtype.array" label="配送方式">
      </el-table-column>
      <!-- <el-table-column  label="收货地址/提货人">提货人:{{where.man}}<br>
      联系电话:{{where.tel}}</el-table-column> -->
      <el-table-column prop="order_status.array" label="订单状态">
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="text" size="mini">查看发货单</el-button>
        <el-button type="text" size="mini">确认发货</el-button>
        <el-button type="text" size="mini">查看订单</el-button>
        <el-button type="text" size="mini">取消订单</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    orderlist: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
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
