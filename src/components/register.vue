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
    <button class="register_button" @click="retister" disabled>注册</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      re_password: "",
      email: "",
      phone: "",
      register_message: "当前注册功能禁用！"
    };
  },
  methods: {
    retister() {
      var user = {
        username: this.username,
        password: this.password,
        re_password: this.re_password,
        email: this.email,
        phone: this.phone
      };
      this.$axios({
        url: "/api/register",
        method: "post",
        type: "json",
        headers: {
          "Content-Type": "application/json; charset=utf-8" //这里重点
        },
        data: JSON.stringify(user)
      })
        .then(res => {
          if (res.data.code == 1) {
            this.$notify({
              message: res.data.message
            });
          }
        })
        .catch(e => {
          this.register_message = e.response.data.message;
        });
    }
  }
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
.register_message {
  font-size: 13px;
  color: red;
}
</style>