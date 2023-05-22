<template>
  <div class="login_container">
      <div class="login">
        <div class="login-form">
          <h2>登录</h2>
          <!--model数据对象，rules整体表单验证规则，ref用来引用整体表单，prop整体规则中的单项规则-->
          <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="70px">
            <el-form-item label="电话号码" prop="phone">
              <el-input prefix-icon="el-icon-user" placeholder="请填写电话号码" maxlength="11" v-model="loginForm.phone" ></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password"  v-show="!isCode">
              <el-input prefix-icon="el-icon-lock" placeholder="请填写 6-18 位密码" type="password" maxlength="18" v-model="loginForm.password" show-password></el-input>
            </el-form-item>

            <el-form-item class="btn-r" label-width="0px">
              <el-button type="primary" icon="el-icon-s-promotion" :loading="loading" @click="submitForm('loginForm')">登 录</el-button>
            </el-form-item>

            <el-form-item class="btn-l" label-width="0px">
              <router-link to="/register">
              <el-button type="success" icon="el-icon-back">注 册</el-button></router-link>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    </template>

<script>
export default {
  data () {
    const phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入电话号码'))
      } else {
        callback()
      }
    }

    const password = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{3,16}$/.test(value)) {
        return callback(new Error('密码长度在3-18个字符，只能包含数字、大小写字母'))
      } else {
        callback()
      }
    }

    return {
      isCode: false,
      loading: false, // 加载效果
      loginForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { validator: phone, trigger: 'blur' }
        ],
        password: [
          { validator: password, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 清空表单
    clearForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 登录
    submitForm (formName) {
      if (true) {
        // 账户密码正确后,转跳到home页面
        console.log("登陆成功")
      }
    }

    // 初始化仓库（不需要后端返回数据）
    // intoHome (formName) {
    //   this.loading = true
    //   // 保存数据
    //   window.localStorage.setItem('initData', JSON.stringify({
    //     capacity_x: this.initStock.capacity_x,
    //     capacity_y: this.initStock.capacity_y,
    //     avg: this.initStock.avg,
    //     gateMachine: this.initStock.gateMachine
    //   }))
    //   const init = JSON.parse(window.localStorage.getItem('initData'))
    //   console.log('接收到')
    //   console.log(init.capacity_x)
    //   this.$router.push({ path: '/home' })
    //   this.loading = false
    //   this.initVisible = false
    // }
  }
}
</script>

  <style>
  .login_container {
      background-image: url("../../assets/welcome.jpg");
      height: 900px;
  }

  .login {
    background-color: transparent !important;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    height: 300px;
    width: 500px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    opacity: 0.8;
    padding: 10px 50px;
  }

  .login input::-webkit-outer-spin-button,
  .login input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

  .login input[type='number'] {
      -moz-appearance: textfield;
  }

  .btn-r {
    width: 100px;
    float: right;
  }

  .btn-l {
    width: 100px;
    float: left;
  }

  .b span {
    font-size: 12px;
    cursor: pointer;
    display: inline-block;
    margin-top: 5px;
  }

  .findPassword {
    padding: 0px 50px;
  }

  /* .initDialog{

  } */
  </style>
