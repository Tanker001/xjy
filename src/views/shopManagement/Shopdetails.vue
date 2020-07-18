<!-- 店铺详情 -->
<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商铺管理</el-breadcrumb-item>
      <el-breadcrumb-item>商铺详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card round class="box-card">
      <div class="hearder">店铺基本信息</div>
      <el-row class="ell-row">
        <el-col :span="12">
          <span>店铺ID:</span>
          <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        </el-col>
        <el-col :span="12">
          <span>店铺头像:</span>
          <img src="imageUrl">
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { getshopdetails } from '@/api/goods'
export default {
  data() {
    return {
      imageUrl: '',
      param: '',
      input: ''
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.param = this.$route.query
    this.getShop()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log(this.param.id)
  },
  methods: {
    async getShop() {
      const { data: res } = await getshopdetails(100)
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>
.hearder {
  text-align: left;
  margin-bottom: 25px;
}
.ell-row {
  width: 90%;
  margin: 0 auto;
}
.el-input {
  margin-left: 20px;
  width: 280px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
