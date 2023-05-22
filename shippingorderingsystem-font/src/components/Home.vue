<template>
  <el-container class="home-container">
    <!-- 页面主体区域 -->
    <el-container class="all">
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区 -->
        <el-menu
          background-color=#69a7e5
          text-color="#EAEDF1"
          active-text-color="#b2b2b2"
          :collapse-transition="false"
          router="true" >
          <!-- 一级菜单1 -->
          <el-submenu>
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-s-home"></i>
              <!-- 文本 -->
              <span>订单与包裹</span>
            </template>
              <el-menu-item index="createShippingOrder">
                <template slot="title">
                  <i class="el-icon-video-camera"></i>
                  <span>寄件</span>
                </template>
              </el-menu-item>
              <el-menu-item index="checkShipment">
                <template slot="title">
                  <i class="el-icon-video-camera"></i>
                  <span>查询包裹信息</span>
                </template>
              </el-menu-item>
        </el-submenu>
        <el-menu-item index="fee" class="test">
        <i class="el-icon-place"></i>
        <span slot="title">支付中心</span>
      </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </template>

<script>
export default {
  components: {
  },
  created () {
    const _this = this
    var User = JSON.parse(sessionStorage.getItem('user'))
    if (User) {
      var level = User.level
      console.log(level)
      if (level === 'admin') {
        _this.isNotAdmin = false
      }
    }
  },
  methods: {
    tryAction () {
      this.$router.push('/main')
    }
  },
  data () {
    return {
      isNotAdmin: true
    }
  }
}
</script>

<style lang="less" scoped>
.all {
  height: 900px;
}
.el-aside{
  background-color: #69a7e5;
  height: 100%;
}
.el-main{
  background-color: #e8f2fa;
  height: 100%;
}
.el-icon-s-home,.el-icon-video-camera,.el-icon-user,.el-icon-user-solid,.el-icon-edit,.el-icon-place,.test{
    color: #e8f2fa;
}
</style>
