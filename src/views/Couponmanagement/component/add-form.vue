<template>
  <el-form
    :model="addCouForm"
    :rules="addCouRules"
    ref="addCouRef"
    label-width="110px"
    class="demo-ruleForm"
  >
    <el-form-item label="优惠券名称" prop="name">
      <el-input class="firstIn" v-model="addCouForm.name"></el-input>
    </el-form-item>
    <el-form-item label="优惠券金额" prop="money">
      <el-input v-model="addCouForm.money"></el-input>
    </el-form-item>
    <el-form-item label="使用金额限制" prop="limit">
      <el-input v-model="addCouForm.limit"></el-input>
    </el-form-item>
    <el-form-item label="使用时限" prop="time_limit">
      <el-input v-model="addCouForm.time_limit"></el-input>
    </el-form-item>
    <el-form-item label="账号领取上限" prop="receive">
      <el-input v-model="addCouForm.receive"></el-input>
    </el-form-item>
    <el-form-item label="发放总数量" prop="cou_total">
      <el-input v-model="addCouForm.cou_total"></el-input>
    </el-form-item>
    <!-- 按钮区域 -->
    <el-button type="primary" @click="addCou">提交</el-button>
    <el-button type="info" @click="$router.back()">返回优惠券列表</el-button>
  </el-form>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
// import { addCoupon } from '@/api/goods.js'

export default {
  data() {
    return {
      addCouForm: {
        name: '',
        money: '',
        limit: '',
        time_limit: '',
        receive: '',
        cou_total: ''
      },
      addArr: {},
      addCouRules: {
        name: [
          {
            required: true,
            message: '请输入优惠券名称',
            trigger: ['blur', 'change']
          },
          {
            min: 3,
            max: 9,
            message: '优惠券名称长度在3到9个字符之间',
            trigger: ['blur', 'change']
          }
        ],
        money: [
          {
            required: true,
            message: '请输入优惠券金额',
            trigger: ['blur', 'change']
          },
          {
            min: 1,
            max: 2,
            message: '优惠券金额不能大于99',
            trigger: ['blur', 'change']
          }
        ],
        limit: [
          {
            required: true,
            message: '请输入金额限制',
            trigger: ['blur', 'change']
          }
        ],
        time_limit: [
          {
            required: true,
            message: '请输入使用时限',
            trigger: ['blur', 'change']
          }
        ],
        receive: [
          {
            required: true,
            message: '请输入账号领取上限',
            trigger: ['blur', 'change']
          }
        ],
        cou_total: [
          {
            required: true,
            message: '请输入发放总数量',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  computed: {
    ...mapMutations(['addFormArr']),
    ...mapState(['editFromArr'])
  },
  methods: {
    // ...mapMutations(['addCou']),
    async addCou() {
      this.addArr = this.addCouForm
      console.log(this.addArr, '添加成功')
      this.$store.commit('setAddForm', this.addArr)
      this.$router.push('/currencyCoupon')
    }
  },
  mounted() {
    this.addCouForm = this.editFromArr
  }
}
</script>

<style lang="less" scoped>
.el-input {
  width: 200px;
}
.firstIn {
  width: 300px;
}
.el-button {
  width: 145px;
}
</style>