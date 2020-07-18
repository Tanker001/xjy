<!-- 订单管理 -->
<template>
  <div>
    <!-- 面包屑导航栏 -->
    <div class="tab">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>订单管理</el-breadcrumb-item>
        <el-breadcrumb-item>订单统计</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>订单统计</el-breadcrumb-item> -->
      </el-breadcrumb>
      <!-- 卡片视图 -->
      <el-card>
        <el-form ref="form" :model="form" label-width="100px">
          <el-row>
            <el-col :span="8" class="seccol">
              <el-form-item label="商户ID/名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="日期">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form"
                  style="width: 100%;"
                  class="inline"
                ></el-date-picker
                >-
                <el-date-picker
                  type="date"
                  class="inline"
                  v-model="form"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="行业">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="secondrow">
            <el-button type="primary">查询</el-button>
            <el-button type="danger">重置</el-button>
          </div>
        </el-form>
        <div class="orderlis">
          <el-row class="minfont rowmg">
            <el-col :span="3">订单数量:xxxx</el-col>
            <el-col :span="3">订单总金额:xxxx</el-col>
            <el-col :span="4" :offset="2">退款/售后订单数量:xxx</el-col>
            <el-col :span="3">退款/售后率</el-col>
            <el-col :span="4">确认退款订单数量:xxx</el-col>
            <el-col :span="4">确认退款率:xx.x%</el-col>
          </el-row>
          <el-table :data="tableData" style="width: 100%" height="500px">
            <el-table-column prop="date" label="商户ID"></el-table-column>
            <el-table-column prop="name" label="商户名称"></el-table-column>
            <el-table-column prop="name" label="行业"></el-table-column>
            <el-table-column
              prop="address"
              label="订单总数量"
            ></el-table-column>
            <el-table-column prop="date" label="订单总金额"></el-table-column>
            <el-table-column
              prop="name"
              label="退款/售后订单数量"
            ></el-table-column>
            <el-table-column prop="name" label="退款/售后率"></el-table-column>
            <el-table-column prop="date" label="确认退款金额">
            </el-table-column>
            <el-table-column
              prop="name"
              label="确认退款率:xxx.x%"
              width="130px"
            >
            </el-table-column>
            <el-table-column label="操作">
              <el-button type="text" size="mini">查看发货单</el-button>
              <el-button type="text" size="mini">确认发货</el-button>
              <el-button type="text" size="mini">查看订单</el-button>
              <el-button type="text" size="mini">取消订单</el-button>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      },
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
/deep/.el-breadcrumb__inner {
  font-size: 20px;
}
/deep/.el-input {
  width: 300px;
}
/deep/.el-form-item__content {
  display: flex;
}
// /deep/.inline {
//   //   display: inline-block;
// }
.secondrow {
  display: flex;
  justify-content: end;
  margin-right: 191px;
}
.minfont {
  margin-top: 15px;
  font-size: 12px;
  color: #909399;
}
/deep/.rowmg {
  margin-top: 23px;
}
// .orderlis {
//     display: flex;
//     justify-content: space-between;
// }
/* @import url(); 引入css类 */
</style>
