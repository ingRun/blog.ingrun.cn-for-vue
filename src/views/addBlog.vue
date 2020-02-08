<template>
  <div class="addBlog">
    <el-row>
      <el-col :span="24">
        <div class="title">
          <el-input placeholder="文章标题" v-model="title" clearable></el-input>
          <p>注意，正文暂时不支持上传图片功能！</p>
        </div>
      </el-col>
      <el-col :span="24">
        <mavon-editor v-model="contents" defaultOpen="preview" fontSize="16px"></mavon-editor>
      </el-col>
      <el-col>
        <div class="bu">
          <el-button @click="addBlog">submit</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      contents: "" //输入的数据
    };
  },
  methods: {
    addBlog() {
      var blog = {
        blog_title: this.title,
        author: 1,
        contents: this.contents,
        blog_type: "default"
      };

      this.$axios({
        url: "api/addBlog",
        method: "post",
        type: "json",
        headers: {
          "Content-Type": "application/json; charset=utf-8", //这里重点
          Authorization: "Bearer " + this.$store.state.token
        },
        data: JSON.stringify(blog)
      })
        .then(res => {
          if (res != "") {
            this.$notify({
              title: res.status + "",
              message: "添加博客成功！",
              duration: 2000,   //2秒自动消失
              type: 'success'
            });
          }
        })
        .catch(e => {
          this.$notify.error({
            title: ' ' + e.response.status,
            message: e.response.data.message + ''
          });
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.bu {
  padding: 15px;
  text-align: left;
  padding-left: 0;
}

.title {
  padding: 15px;
  text-align: left;
  padding-left: 0;
  padding-right: 0;

  p {
    color: rgb(155, 154, 154);
    font-size: 14px;
  }
}
</style>