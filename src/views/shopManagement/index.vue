<!-- 商铺管理 -->
<template>
  <div class="shopManagement">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商铺管理</el-breadcrumb-item>
      <el-breadcrumb-item>商铺列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card round class="box-card">
      <el-row>
        <el-col :span="8">
          <div class="box-card_one">
            <span>店铺编号/名称</span>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box-card_one">
            <span>行业</span>
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
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>店铺数量:{{tableData.length}}</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <span>共享店铺数量:</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>销售总额:</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-card round class="box-card">
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column fixed prop="uid" label="店铺编号"></el-table-column>
        <el-table-column prop="name" label="店铺名称"></el-table-column>
        <el-table-column prop="industry" label="店铺行业"></el-table-column>
        <el-table-column prop="address" label="店铺地址"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="tid" label="推广人ID"></el-table-column>
        <el-table-column prop="equity_level" label="权益级别" #default="{ row }">
          <!-- {{ row }} -->
          <el-tag size="mini" v-if="row.equity_level===0">一级</el-tag>
          <el-tag size="mini" type="success" v-else-if="row.equity_level===1">二级</el-tag>
          <el-tag size="mini" type="warning" v-else>三级</el-tag>
        </el-table-column>
        <el-table-column prop="equity_Time" #default="{ row }" label="权益时限">{{ row.equity_Time }}/天</el-table-column>
        <el-table-column prop="sales_volume" label="销售额"></el-table-column>
        <el-table-column prop="operation_status" label="运营状态" #default="{ row }">
          <el-tag size="mini" v-if="row.operation_status===0">独立运营</el-tag>
          <el-tag size="mini" type="success" v-else-if="row.operation_status===1">共享运营</el-tag>
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
            <el-button type="danger" icon="el-icon-delete" @click="open" circle></el-button>
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
  },
  methods: {
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
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
  margin-bottom: 25px;
}
.el-card {
  border-radius: 15px;
}
/deep/.el-table .cell {
  text-align: center;
}
</style>