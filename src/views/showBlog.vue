<template>
  <div class="show">
    <el-row v-if="blog_id">
      <el-col :span="24">
        <div class="showTitle">
          <h2>{{blog.blog_title}}</h2>
          <p class="info">
            <span>
              最后修改：
              <span>{{blog.update_time}}</span>
            </span>
            <el-divider direction="vertical"></el-divider>
            <span>
              作者：
              <span>{{author}}</span>
            </span>
            <el-divider direction="vertical"></el-divider>
            <span>
              阅读：
              <span>{{blog.read_count}}</span>
            </span>
          </p>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="content">
          <div class="blog_type">
            <el-row :gutter="10">
              <div v-for="(item, index) in blog.blog_type" :key="index" class="blog_type">
                <el-tag >{{ item }}</el-tag>
              </div>
            </el-row>
          </div>
          <Content :contents="blog_contonts"></Content>
        </div>
      </el-col>
    </el-row>
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
      isloading: '',
      author: ""
    };
  },
  mounted() {
    if (this.$store.state.current_blog_id != "") {
      this.blog_id = this.$store.state.current_blog_id;
    }

    if (this.blog_id != "") {
      this.getBlogcontents(this.blog_id);
      this.getBlog(this.blog_id);
    }
  },
  methods: {
    openLoading() {
        this.isloading = this.$loading({
          lock: true,
          text: 'Loading',
        });
        // setTimeout(() => {
        //   loading.close();
        // }, 2000);
      
    },
    getBlogcontents(id) {
      var url = "api/getBlogContents/" + id;
      this.openLoading();
      this.$axios({
        url: url,
        method: "get"
      }).then(res => {
        if (res.data.code == 1) {
          this.blog_contonts = res.data.data;
          this.isloading.close();
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
        this.getAuthor();
      });
    },

    getAuthor() {
      var url = "api/getUserName/" + this.blog.author;
      this.$axios({
        url: url,
        method: "get",
        type: "json"
      }).then(res => {
        if (res.data.code == 1) {
          this.author = res.data.data;
        }
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

.showTitle {
  // background-color: rgba(204, 206, 207, 0.2);
  background-color: white;
  padding: 55px 0 25px 0;
  margin-bottom: 45px;
  h2 {
    margin: 0;
  }
  .info {
    font-size: 13px;
    color: rgb(144, 145, 146);
    margin-top: 25px;
  }
}

.content {
  max-width: 900px;
  margin: auto;
}

.blog_type {
  text-align: left;
  float: left;
  margin-right: 12px;
  margin-bottom: 10px;
}
</style>


