<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>优惠券管理</el-breadcrumb-item>
      <el-breadcrumb-item>通用优惠券</el-breadcrumb-item>
      <el-breadcrumb-item>新增优惠券</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <h4>新增优惠券</h4>

      <!-- 表单区域 -->
      <add-form></add-form>
    </el-card>
  </div>
</template>

<script>
import AddForm from '@/views/Couponmanagement/component/add-form.vue'

export default {
  components: {
    AddForm
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-breadcrumb {
  font-size: 16px;
}
</style>