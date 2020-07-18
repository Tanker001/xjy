<!-- 商铺管理 -->
<template>
  <div class="shopManagement">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商铺管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card round class="box-card">
      <el-row>
        <el-col :span="4">
          <div class="box-card_one">
            <span>商品</span>
            <el-input placeholder="请输入商品" v-model="input" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="box-card_one">
            <span>所属店铺</span>
            <el-input placeholder="请输入所属店铺" v-model="input1" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box-card_one">
            <span>商品类别</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box-card_one">
            <el-button type="primary" round plain>查询</el-button>
            <el-button type="danger" round plain>重置</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div class="StoreInformation">
      <el-row>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-button type="primary" round plain>导出</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-card round class="box-card">
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column fixed prop="uid" label="商品编号"></el-table-column>
        <el-table-column prop="name" label="所属店铺"></el-table-column>
        <el-table-column prop="industry" label="商品图"></el-table-column>
        <el-table-column prop="address" label="商品名称"></el-table-column>
        <el-table-column prop="phone" label="商品类型"></el-table-column>
        <el-table-column prop="tid" label="成本价"></el-table-column>
        <el-table-column prop="equity_level" label="原价" #default="{ row }">{{row.yuanjia}}/元</el-table-column>
        <el-table-column prop="equity_Time" #default="{ row }" label="参与活动">{{ row.equity_Time }}/天</el-table-column>
        <el-table-column prop="sales_volume" label="销售额"></el-table-column>
        <el-table-column prop="operation_status" label="运营状态" #default="{ row }">
          <el-tag size="mini" v-if="row.operation_status===0">独立运营</el-tag>
          <el-tag size="mini" type="success" v-else-if="row.operation_status===1">共享运营</el-tag>
        </el-table-column>
        <el-table-column prop="status" #default="{ row }" label="推荐">
          <el-tag size="mini" v-if="row.status===0">启用</el-tag>
          <el-tag size="mini" type="success" v-else-if="row.status===1">停用</el-tag>
        </el-table-column>
        <el-table-column prop="status" #default="{ row }" label="状态">
          <el-tag size="mini" v-if="row.status===0">启用</el-tag>
          <el-tag size="mini" type="success" v-else-if="row.status===1">停用</el-tag>
        </el-table-column>
        <el-table-column width="150" fixed="right" #default="{ row }" label="操作">
          <template>
            <el-button
              icon="el-icon-search"
              circle
              @click="$router.push({name: 'Shopdetails',  params: {
            id: row.id
          }})"
            ></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getGoodsList } from '@/api/goods'
export default {
  data() {
    return {
      input: '',
      input1: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      value: '',
      tableData: []
    }
  },
  //  生命周期 - 创建完成（访问当前this实例）
  created() {},
  //  生命周期 - 挂载完成（访问DOM元素）
  async mounted() {
    // const { data: res } = await getGoodsList()
    // console.log(res)
    const { data: res } = await getGoodsList()
    this.tableData = res.list
    console.log(res)
  }
}
</script>
<style lang="less" scoped>
/deep/.el-breadcrumb {
  font-size: 16px;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 50%;
}
.box-card {
  padding-left: 25px;
}
.el-input,
.el-select {
  margin-left: 15px;
}
.StoreInformation {
  margin-left: 35px;
  margin-top: 20px;
  text-align: right;
  margin-bottom: 25px;
}
.el-card {
  border-radius: 15px;
}
/deep/.el-table .cell {
  text-align: center;
}
</style>