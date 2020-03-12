<template>
  <div class="search">
    <div v-if="! search_value_list" class="loading">
      <i class="el-icon-loading"></i>
    </div>
    <el-row>
      <el-col :span="22" :offset="1">
        <div class="_blog" v-for="(item, index) in search_value_list" :key="index">
          <el-row>
            <el-col :span="24">
              <!-- <el-link target="_blank" @click="queryContents(item.id)">{{item.blog_title}}</el-link> -->
              <p @click="queryContents(item.id)">{{item.blog_title}}</p>
            </el-col>
            <el-col :span="24" v-if="item.preview">
              <div class="preview">{{ item.preview}}</div>
            </el-col>
            <el-col :span="2" :offset="1">
              <span>喜欢：{{item.like_count}}</span>
            </el-col>
            <el-col :span="2">
              <span>阅读：{{item.read_count}}</span>
            </el-col>
            <el-col :span="8">
              <span class="time">最后编辑时间：{{item.update_time}}</span>
            </el-col>
            <el-col :span="24">
              <el-divider></el-divider>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_value_list: [],
      search_str: ""
    };
  },
  mounted() {
    this.search_str = this.$route.query.search_value;
    if (this.search_str) {
      this.search_function(this.search_str);
    } else {
      this.$notify({
        message: "查询条件不能为空！"
      });
    }
  },
  methods: {
    search_function(search_str) {
      var url = "api/blogSearch/" + search_str;

      this.$axios({
        url: url,
        method: "get",
        type: "json"
      }).then(res => {
        if (res != "") {
          this.search_value_list = res.data.data;
        }
      });
    },
    queryContents(id) {
      this.$store.commit("set_current_blig_id", id);
      this.$router.push("/show");
    }
  }
};
</script>


<style lang="scss" scoped>
.search {
  max-width: 900px;
  margin: auto;

  ._blog {
    min-height: 100px;
    p {
      font-size: 26px;
      cursor: pointer;
    }
    span {
      font-size: 14px;
      color: #838c8f;
    }
  }

  .preview {
    // background-color: rgb(246, 248, 250);
    border-radius: 4px;
    margin: 0 45px 15px 45px;

    padding: 18px 0;
    text-align: left;
    font-size: 14px;
    color: #c2bbbb;
  }
}

.loading {
  margin-top: 55px;
  font-size: 26px;
}
</style>

