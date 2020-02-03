<template>
  <div class="dra">
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" direction="ltr">
      <transition name="el-zoom-in-center" mode="out-in">
        <div class="login_row" v-if="this.$store.state.token == ''" key='login'>
          <el-tabs type="border-card">
            <el-tab-pane label="登陆">
              <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
              <div style="margin-top: 10px"></div>
              <el-input
                placeholder="请输入密码"
                v-model="password"
                show-password
                @keyup.enter.native="login"
              ></el-input>
              <div style="margin-top: 10px"></div>
              <div style="margin-top: 10px" class="login_message">
                <p>{{login_message}}</p>
              </div>
              <button class="login_button" @click="login">登陆</button>
            </el-tab-pane>
            <el-tab-pane label="注册">
              <Register />
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="else" v-else key='show'>
          <div class="transition-box">
            <div class="user">
              <el-row>
                <el-col :span="7">
                  <div>
                    <p>用户ID：</p>
                    <p>用户名：</p>
                    <p>邮箱：</p>
                    <p>手机号码：</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="UserInfo">
                    <p>{{ user.id }}</p>
                    <p>{{ user.username }}</p>
                    <p>{{ user.email }}</p>
                    <p>{{ user.phone }}</p>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="logout">
              <el-button @click="logout">注销</el-button>
            </div>
          </div>
        </div>
      </transition>
    </el-drawer>
    <div class="ler">
      <el-button @click="drawer = true" type="primary">+</el-button>
    </div>
  </div>
</template>

<script>
import Register from "@/components/register.vue";


export default {
  components: {
    Register
  },

  data() {
    return {
      drawer: false,
      username: "",
      password: "",
      user: {},
      login_message: ""
    };
  },
  mounted() {
    if (this.$store.state.token != "") this.getUserInfo();
  },
  methods: {
    login() {
      var data = {
        username: this.username,
        password: this.password
      };
      this.$axios({
        url: "api/login",
        method: "post",
        type: "json",
        headers: {
          "Content-Type": "application/json; charset=utf-8" //这里重点
        },
        data: JSON.stringify(data)
      })
        .then(res => {
          if (res.data.code != 0) {
            this.$store.commit("set_token", res.data.data.token);
            this.getUserInfo();
            this.login_message = "";
          }
        })
        .catch(e => {
          if (e.response.data.code == 0) {
            this.login_message = e.response.data.message; //设置密码错误提示
          } else {
            this.login_message = "连接服务器失败！";
          }
        });

      this.password = "";
    },

    logout() {
      this.$axios({
        url: "/api/logout",
        method: "post",
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      }).then(res => {
        if (res != "") {
          this.$notify({
            message: "用户注销成功"
          });
          this.$store.commit("set_token", "");
        }
      });
    },

    getUserInfo() {
      this.$axios({
        url: "/api/getUserInfo",
        method: "get",
        type: "json",
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        }
      })
        .then(res => {
          this.user = res.data.data;
        })
        .catch(e => {
          if (e.response.data.code == 0) {
            this.$store.commit("set_token", "");
          }
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.ler {
  position: fixed;
  left: 10px;
  top: 47%;
  button {
    background-color: rgb(97, 114, 207);
    border: none;
    height: 72px;
    padding: 0 10px;
  }
}

.login_row {
  padding: 15px;
  .login_button {
    background-color: #537dca;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    color: white;
  }
}

.user {
  text-align: left;
  margin: 22px 20px;
  background-color: #5cbd79;
  padding: 15px 22px;
  color: white;
  border-radius: 8px;
  p {
    font-family: "simsun";
    font-size: 18px;
  }
}

.logout {
  margin: 22px 20px;
  button {
    width: 100%;
  }
}

.login_message {
  font-size: 13px;
  color: red;
}

.UserInfo{
  p{
    border-bottom: 1px dashed  #ccc;
  }
}
</style>