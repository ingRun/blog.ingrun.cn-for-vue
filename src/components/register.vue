<template>
  <div class="register">
    <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
    <div style="margin-top: 10px"></div>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    <div style="margin-top: 10px"></div>
    <el-input placeholder="请重复输入密码" v-model="re_password" show-password></el-input>
    <div style="margin-top: 10px"></div>
    <el-input placeholder="请输入邮箱" v-model="email" clearable></el-input>
    <div style="margin-top: 10px"></div>
    <el-input placeholder="请输入手机号码" v-model="phone" clearable></el-input>
    <div style="margin-top: 10px"></div>
    <div style="margin-top: 10px" class="register_message">
      <p>{{register_message}}</p>
    </div>
    <button class="register_button" disabled>注册</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      re_password: '',
      email: '',
      phone: '',
      register_message: "当前注册功能禁用！"
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.register_button {
  background-color: #537dca;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  color: white;

}
.register_message{
    font-size: 13px;
    color: red;
}

</style>