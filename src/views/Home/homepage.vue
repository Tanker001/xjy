<!-- 财务管理 -->
<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <span>新零售商户管理后台</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-menu-item  :index="'/welcome'">
            <template slot="title">
              <!-- 图标 -->
              <!-- <i :class="iconarr[index]"></i> -->
              <!-- 文本 -->
              <span>主页</span>
            </template>
          </el-menu-item>
          <el-submenu :index="index + ''" router v-for="(item,index) in menulist" :key="index">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconarr[index]"></i>
              <!-- 文本 -->
              <span>{{item.authName }}</span>
            </template>
            <!-- 二级子菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <!-- 二级菜单模板 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      menulist: [
        // {
        //   id: 1,
        //   authName: '主页',
        //   path: 'shop'
        // },
        {
          id: 2,
          authName: '店铺管理',
          path: 'shop',
          children: [
            { id: 11, authName: '店铺列表', path: 'shopInfo' },
            { id: 12, authName: '商品列表', path: 'shopStyle' },
            { id: 13, authName: '开店审核', path: 'shopRights' },
            { id: 14, authName: '店铺权益设置', path: 'shopRights' },
            { id: 15, authName: '店铺行业管理', path: 'shopRights' },
            { id: 16, authName: '商品类别管理', path: 'shopRights' }
          ]
        },
        {
          id: 3,
          authName: '商圈管理',
          path: 'shop',
          children: [
            { id: 21, authName: '共享商圈管理', path: 'shopInfo' },
            { id: 22, authName: '个人商圈管理', path: 'shopStyle' }
          ]
        },
        {
          id: 4,
          authName: '订单管理',
          path: 'shop',
          children: [
            { id: 31, authName: '订单列表', path: 'shopInfo' },
            { id: 32, authName: '订单统计', path: 'shopStyle' }
          ]
        },
        {
          id: 5,
          authName: '优惠券管理',
          path: 'shop',
          children: [
            { id: 51, authName: '通用优惠券', path: 'currencyCoupon' },
            { id: 52, authName: '店铺优惠券', path: 'shopCoupon' }
          ]
        },
        {
          id: 6,
          authName: '推广列表',
          path: 'shop'
        },
        {
          id: 7,
          authName: '素材库管理',
          path: 'shop',
          children: [
            { id: 71, authName: '官方素材库', path: 'shopInfo' },
            { id: 72, authName: '素材审核', path: 'shopStyle' },
            { id: 73, authName: '用户素材管理', path: 'shopStyle' }
          ]
        },
        {
          id: 8,
          authName: '财务管理',
          path: 'shop',
          children: [
            { id: 81, authName: '提现管理', path: 'shopInfo' },
            { id: 82, authName: '平台收入明细', path: 'shopStyle' },
            { id: 83, authName: '平台支出明细', path: 'shopStyle' }
          ]
        },
        {
          id: 9,
          authName: '系统设置',
          path: 'shop',
          children: [
            { id: 91, authName: '账号管理', path: 'shopInfo' },
            { id: 92, authName: '参数设置', path: 'shopStyle' }
          ]
        }
      ],
      iconarr: {
        1: 'iconfont icon-user',
        2: 'iconfont icon-tijikongjian',
        3: 'iconfont icon-shangpin',
        4: 'iconfont icon-danju',
        5: 'iconfont icon-baobiao'
      },
      activePath: ''
    }
  },
  created() {},
  methods: {
    logout() {
      console.log('退出')
    }
  }
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: pink;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
</style>
