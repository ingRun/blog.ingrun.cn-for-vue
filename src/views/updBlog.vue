<template>
  <div class="addBlog">
    <el-row>
      <el-col :span="24">
        <div class="title">
          <el-input placeholder="文章标题" v-model="blog.blog_title" clearable></el-input>
          <p>注意，正文暂时不支持上传图片功能！</p>
        </div>
      </el-col>
      <el-col :span="24">
        <mavon-editor v-model="blog_contents" defaultOpen="preview" fontSize="15px"></mavon-editor>
      </el-col>
      <el-col>
        <div class="bu">
          <el-button @click="updBlog(blog_id)">submit</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: '',
      blod_id: '',
      blog_contents: '',
      isloading: false
    };
  },
  mounted(){
    if (this.$store.state.current_blog_id != "") {
      this.blog_id = this.$store.state.current_blog_id;
      this.getBlog(this.blog_id)
      this.getBlogcontents(this.blog_id)
    }
  },
  methods: {
    updBlog(id) {
      var blog = {
        id: id,
        contents: this.blog_contents,
        blog_title: this.blog.blog_title,
        blog_type: this.blog.blog_type
      };

      this.$axios({
        url: "api/updBlog",
        method: "post",
        type: "json",
        headers: {
          "Content-Type": "application/json; charset=utf-8" //这里重点
        },
        data: JSON.stringify(blog)
      }).then(res => {
        if (res != "") {
          this.$notify({
            message: "修改博客成功！"
          });
          this.$router.push('/show')
        }
      });

    },
    getBlogcontents(id) {
      var url = "api/getBlogContents/" + id;
      this.$axios({
        url: url,
        method: "get"
      }).then(res => {
        this.isloading = false
        if (res.data.code == 1) {
          this.blog_contents = res.data.data
        }
      });
    },
    getBlog(id){
      var url = "api/getBlog/" + id
      this.$axios({
        url: url,
        method: "get",
      }).then(res => {
        this.blog = res.data.data
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