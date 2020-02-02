<template>
  <div class="show">
    <el-row v-if="blog_id">
      <el-col :span="24">
        <h2>{{blog.blog_title}}</h2>
        <div class="icon">
          <el-row>
            <el-col :span="1" :offset="20">
              <el-link @click="toUpdBlog()">
                <i class="el-icon-edit"> 编辑</i>
              </el-link>
            </el-col>
            <el-col :span="1">
              <i class="el-icon-share">分享</i>
            </el-col>
            <el-col :span="1">
              <i class="el-icon-delete">删除</i>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="24">
        <Content :contents="blog_contonts"></Content>
      </el-col>
    </el-row>
    <div v-else v-loading.fullscreen.lock="isloading"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "@/components/content.vue";

export default {
  name: "show",
  components: {
    Content
  },
  data() {
    return {
      blog: "",
      blog_contonts: "",
      blog_id: "",
      isloading: false
    };
  },
  mounted() {
    if (this.$store.state.current_blog_id != "") {
      this.blog_id = this.$store.state.current_blog_id;
    }

    if (this.blog_id != "") {
      this.isloading = true;
      this.getBlogcontents(this.blog_id);
      this.getBlog(this.blog_id);
    }
  },
  methods: {
    getBlogcontents(id) {
      var url = "api/getBlogContents/" + id;
      this.$axios({
        url: url,
        method: "get"
      }).then(res => {
        this.isloading = false;
        if (res.data.code == 1) {
          this.blog_contonts = res.data.data;
        }
      });
    },
    getBlog(id) {
      var url = "api/getBlog/" + id;
      this.$axios({
        url: url,
        method: "get"
      }).then(res => {
        this.blog = res.data.data;
      });
    },

    toUpdBlog() {
      this.$router.push("/updBlog");
    }
  }
};
</script>


<style lang='scss' scoped>
.icon {
  font-size: 13px;
  padding-bottom: 0px;
  i {
    cursor: pointer;
  }
}
</style>


