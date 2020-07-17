<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>优惠券管理</el-breadcrumb-item>
      <el-breadcrumb-item>通用优惠券</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- //顶部搜索区域 -->
      <div>
        <span>优惠券：</span>
        <el-input placeholder="请输入优惠券名称" suffix-icon="el-icon-search" clearable></el-input>
        <span class="riqi">日期：</span>
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-button class="chaxun-btn">查询</el-button>
        <el-button>重置</el-button>
      </div>
      <!-- 顶部搜索区域//-->

      <!-- //新增优惠券 -->
      <div class="addyouhui">
        <el-button
          type="primary"
          size="mini"
          @click="$router.push('/currencyCoupon/addcoupon')"
        >新增优惠券</el-button>

        <span class="xiangqing">发放总数量：张</span>
        <span class="lqjinge">领取总金额：元</span>
      </div>
      <!-- 新增优惠券// -->

      <!-- //表格区域 -->
      <el-table :data="couponList" stripe style="width: 100%">
        <el-table-column prop="name" label="优惠券名称"></el-table-column>
        <el-table-column prop="money" label="优惠券金额/元"></el-table-column>
        <el-table-column prop="limit" label="使用金额限制" #default="{ row }">
          <!-- {{ row }} -->
          <span v-if="row.limit === 0">有</span>
          <span v-else>无</span>
        </el-table-column>
        <el-table-column prop="time_limit" label="使用时限/天"></el-table-column>
        <el-table-column prop="receive" label="领取限制/张"></el-table-column>
        <el-table-column prop="cou_total" label="发放总数量/张"></el-table-column>
        <el-table-column prop="receive_money" label="领取金额/元"></el-table-column>
        <el-table-column label="操作">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </el-table-column>
      </el-table>
      <!-- 表格区域// -->
    </el-card>
  </div>
</template>

<script>
import { getCurrencyCouponList } from '@/api/goods.js'

export default {
  data() {
    return {
      couponList: []
    }
  },
  methods: {
    async setCurrencyCouponList() {
      const { data: res } = await getCurrencyCouponList()
      console.log(res)
      this.couponList = res.data
      // console.log(this.couponList.name)
    }
  },
  mounted() {
    this.setCurrencyCouponList()
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-breadcrumb {
  font-size: 16px;
}
.el-input {
  width: 200px;
}
.riqi {
  margin-left: 100px;
}
.chaxun-btn {
  margin-left: 200px;
}
.addyouhui {
  margin-top: 15px;
}
.xiangqing {
  margin-left: 700px;
}
.lqjinge {
  margin-left: 25px;
}
</style>