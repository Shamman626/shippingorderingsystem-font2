<template>
  <div>
    <!--  寄方信息-->
    <div class="sender_container">
      <div class="sender">
        <div class="sender-form">
          <h3>寄件人</h3>
          <!--model数据对象，rules整体表单验证规则，ref用来引用整体表单，prop整体规则中的单项规则-->
          <el-form :model="senderFrom" ref="senderForm" label-width="70px">
            <el-form-item label="姓名" prop="senderName">
              <el-input prefix-icon="el-icon-user" placeholder="请填写姓名" v-model="senderFrom.phone" ></el-input>
            </el-form-item>

            <el-form-item label="身份证号" prop="senderIDNumberd"  v-show="!isCode">
              <el-input prefix-icon="el-icon-lock" placeholder="请填写身份证号" maxlength="18" v-model="senderFrom.senderIDNumber" show-password></el-input>
            </el-form-item>

            <el-form-item label="电话号码" prop="senderPhone"  v-show="!isCode">
              <el-input prefix-icon="el-icon-lock" placeholder="请填写电话号码" maxlength="11" v-model="senderFrom.senderPhone" show-password></el-input>
            </el-form-item>

            <el-form-item label="省市区" prop="senderProvince"  v-show="!isCode">
              <el-input prefix-icon="el-icon-lock" placeholder="请填写省市区" v-model="senderFrom.senderProvince" show-password></el-input>
            </el-form-item>

            <el-form-item label="详细地址" prop="senderDetailAddress"  v-show="!isCode">
              <el-input prefix-icon="el-icon-lock" placeholder="请填写详细地址" v-model="senderFrom.senderDetailAddress" show-password></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div><br></div>
    <!--  收方信息-->
    <div class="receiver_container">
      <div class="receiver">
        <div class="receiver-form">
          <h3>寄件人</h3>
          <!--model数据对象，rules整体表单验证规则，ref用来引用整体表单，prop整体规则中的单项规则-->
          <el-form :model="receiverFrom" ref="receiverForm" label-width="70px">
            <el-form-item label="姓名" prop="receiverName">
              <el-input prefix-icon="el-icon-user" placeholder="请填写姓名" v-model="receiverFrom.receiverName" ></el-input>
            </el-form-item>

            <el-form-item label="电话号码" prop="receiverPhone"  v-show="!isCode">
              <el-input prefix-icon="el-icon-lock" placeholder="请填写电话号码" maxlength="11" v-model="receiverFrom.receiverPhone" show-password></el-input>
            </el-form-item>

            <el-form-item label="省市区" prop="receiverProvince"  v-show="!isCode">
              <el-input prefix-icon="el-icon-lock" placeholder="请填写省市区" v-model="receiverFrom.receiverProvince" show-password></el-input>
            </el-form-item>

            <el-form-item label="详细地址" prop="receiverDetailAddress"  v-show="!isCode">
              <el-input prefix-icon="el-icon-lock" placeholder="请填写详细地址" v-model="receiverFrom.receiverDetailAddress" show-password></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div><br></div>
    <el-button>提交订单</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      senderFrom: {
        senderName: '',
        senderIDNumber: '',
        senderPhone: '',
        senderProvince: '',
        senderDetailAddress: ''
      },
      receiverFrom: {
        receiverName: '',
        receiverPhone: '',
        receiverProvince: '',
        receiverDetailAddress: ''
      }
    }
  }
}

</script>

<style scoped>
.sender{
  background-color: transparent !important;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.sender-form{
  height: 400px;
  width: 1100px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  opacity: 0.8;
  padding: 10px 50px;
}
.receiver{
  background-color: transparent !important;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.receiver-form{
  height: 350px;
  width: 1100px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  opacity: 0.8;
  padding: 10px 50px;
}


</style>
