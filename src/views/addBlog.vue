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
      <el-col :span="24">
        <div style="margin-top: 30px;">
          <el-input placeholder="预览内容" v-model="preview" type="textarea" class="input-with-select"></el-input>

          <div style="text-align: left; margin-top: 15px;">
            <el-button slot="append" @click="getpreview" type="primary" plain size="small">自动生成预览</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="24">
        <el-divider></el-divider>
      </el-col>
      <el-col :span="24">
        <div class="bu">
          <el-button @click="isAddBlog" type="primary" plain class="mybutton">添加博客</el-button>
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
      contents: "", //输入的数据
      preview: ""
    };
  },
  methods: {
    getpreview() {
      // document.getElementById("divid").innerText
      var preview = document.getElementsByClassName("v-show-content")[0]
        .innerText;
      if (preview.length > 200) {
        this.preview = preview.substr(0, 200);
      } else {
        this.preview = preview;
      }
    },

    isAddBlog() {
      this.$confirm("确认添加博客, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // this.$message({
          //   type: "success",
          //   message: "删除成功!"
          // });
          this.addBlog();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },

    addBlog() {
      var blog = {
        blog_title: this.title,
        author: 1,
        contents: this.contents,
        blog_type: "default",
        preview: this.preview
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
          if (res.data.code == 1) {
            this.$router.push("/");
            this.$notify({
              title: res.status + "",
              message: "添加博客成功！",
              duration: 2000, //2秒自动消失
              type: "success"
            });
          }
        })
        .catch(e => {
          this.$notify.error({
            title: " " + e.response.status,
            message: e.response.data.message + ""
          });
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.addBlog {
  max-width: 84%;
  margin: auto;
}

.bu {
  padding: 15px;
  // text-align: left;
  .mybutton {
    width: 180px;
    // height: 80px;
  }
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