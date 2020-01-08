<template>
  <div class="hello">
    <p name="1">创建blog 的 vue 在 GitHub 上的项目 并同步</p>
    <p>创建脚本 完成 blog 后端 项目的同步发布</p>
    <p>创建脚本 完成 blog 前 后端 的发布脚本</p>
    <el-button type="primary" @click="login">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    login() {
      this.$axios({
        url: "api/login",
        method: "post",
        type: "json",
        headers: {
          "Content-Type": 'application/json; charset=utf-8', //这里重点
        },
        data: JSON.stringify({"email": "123@456.com"})
      }).then(res => {
          if (res == ''){
            res = res.data
          }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
