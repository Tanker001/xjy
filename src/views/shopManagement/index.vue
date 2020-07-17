<!-- 商铺管理 -->
<template>
  <div class="shopManagement">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商铺管理</el-breadcrumb-item>
      <el-breadcrumb-item>商铺列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
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
  </div>
</template>

<script>
import { getGoosli } from '@/api/goods'
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
      value: ''
    }
  },
  //  生命周期 - 创建完成（访问当前this实例）
  created() {},
  //  生命周期 - 挂载完成（访问DOM元素）
  async mounted() {
    // const { data: res } = await getGoodsList()
    // console.log(res)
    const { data: res } = await getGoosli()
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
</style>