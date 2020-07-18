<!-- 订单管理 -->
<template>
  <div>
    <!-- 面包屑导航栏 -->
    <div class="tab">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>订单管理</el-breadcrumb-item>
        <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>订单统计</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <!-- 订单管理模块 -->
    <div class="ordermanger">
      <span>订单管理</span>
      <el-card>
        <el-form ref="form" :inline="true" :model="form" label-width="80px">
          <div class="firstrow">
            <el-form-item label-width="120px" label="商户ID/名称：">
              <el-input
                v-model="form.name"
                placeholder="点我发送mock请求"
                @focus="getmockdata"
              ></el-input>
            </el-form-item>
            <el-form-item label="订单号:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="配送方式">
              <el-select v-model="form.region" placeholder="全部">
                <el-option label="到店自提" value="shanghai"></el-option>
                <el-option label="同城配送" value="beijing"></el-option>
                <el-option label="跨城配送" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <!-- <el-form-item class="firstrow" label="商户ID/名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label="订单号:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label="配送方式">
          <el-select v-model="form.region" placeholder="全部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
          <el-form-item class="secform" label-width="144px" label="下单日期">
            <el-row style="width:100%;">
              <el-col :span="8" class="secondrow">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form"
                  style="width: 100%;"
                ></el-date-picker
                >-
                <el-date-picker
                  type="date"
                  v-model="form"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>

              <el-col :span="12" :push="2">
                <el-form-item label="手机号">
                  <el-input v-model="form.desc"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4" :push="4">
                <el-form-item>
                  <el-button type="primary">查询</el-button>
                  <el-button type="danger">重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
        <el-tabs v-model="form.activeName" @tab-click="handleClick" type="card">
          <!-- 这里面每一项tab-pan都是差不多的界面,所以这里使用公共组件来处理同样的界面 -->
          <el-tab-pane label="全部" name="1">
            <on-order :orderlist="orderList"></on-order>
          </el-tab-pane>
          <el-tab-pane label="待支付" name="2">
            <on-order :orderlist="orderList"></on-order>
          </el-tab-pane>
          <el-tab-pane label="待自提" name="3">
            <on-order :orderlist="orderList"></on-order>
          </el-tab-pane>
          <el-tab-pane label="代配送" name="4">
            <on-order :orderlist="orderList"></on-order>
          </el-tab-pane>
          <el-tab-pane label="代发货" name="5">
            <on-order :orderlist="orderList"></on-order>
          </el-tab-pane>
          <el-tab-pane label="已收货" name="6">
            <on-order :orderlist="orderList"></on-order>
          </el-tab-pane>
          <el-tab-pane label="售后付款" name="7">
            <on-order :orderlist="orderList"></on-order>
          </el-tab-pane>
          <el-tab-pane label="已取消" name="8">
            <on-order :orderlist="orderList"></on-order>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
// 导入request请求方法
// import request from '@/utils/request'
import OnOrder from './component/OnOrder'
export default {
  components: { OnOrder },
  data() {
    return {
      orderList: [],
      // shanghai: 'shanghai',
      // beijing: 'beijing',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        activeName: '1'
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getOrderList()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  // 方法
  methods: {
    async getOrderList() {
      const { data: res } = await this.$http.get('/order/list')
      console.log(res)
      this.orderList = res.data
    },
    async getmockdata() {
      // const data = await this.$http.get('/user/list')
      // console.log('老师的示例', data)
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
/deep/.firstrow {
  display: flex;
  //   flex-direction: row;
  justify-content: space-around;
}
/deep/.secondrow {
  display: flex !important;
  //   flex-direction: row;
  //   justify-content: space-between;
}
/deep/.secform {
  width: 100%;
}
.el-card {
  margin-top: 20px;
}
/deep/.el-breadcrumb__inner {
  font-size: 20px;
}
</style>
