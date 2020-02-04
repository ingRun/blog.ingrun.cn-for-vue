<template>
  <div id="aside">
    <div class="con">
      <el-row>
        <el-col :span="22" :offset='1'>
          <div class="_blog" v-for="(item, index) in blog_list" :key="index">
            <el-row>
              <el-col :span="18">
                <el-link target="_blank" @click="queryContents(item.id)">{{item.blog_title}}</el-link>
              </el-col>
              <el-col :span="3">
                <i class="el-icon-star-on">
                  &emsp;
                  <span>喜欢：{{item.like_count}}</span>
                </i>
              </el-col>
              <el-col :span="3">
                <i class="el-icon-view">
                  &nbsp;
                  <span>阅读：{{item.read_count}}</span>
                </i>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myaside",
  data() {
    return {
      blog_list: ""
    };
  },
  props: {
    msg: String
  },
  mounted() {
    this.queryList();
  },
  methods: {
    queryList() {
      this.$axios({
        method: "get",
        url: "api/getBlogList"
      })
        .then(response => {
          if (response.data.code == 1) {
            this.blog_list = response.data.data;
          } else {
            this.$toast.fail(response.data.message + "");
          }
        })
        .catch(err => {
          this.isLoading = false;
          this.$toast.fail(err + "");
        });
    },

    queryContents(id) {
      this.$store.commit("set_current_blig_id", id);
      this.$router.push("/show");
    }
  }
};
</script>

<style lang='scss' scoped>
#aside {
  margin-top: 40px;
}

._blog {
  height: 45px;
  border-bottom: 1px dashed rgb(201, 193, 193);
  // border-radius: 6px;
  margin: 12px;
  padding: 0 12px;
  // display: table;

  span {
    font-size: 14px;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  i {
    font-size: 20px;
  }
}

.con {
  // border: 1px solid #ccc;
  border-radius: 12px;
  padding: 15px;
  min-height: 450px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  // text-align: left;
  // background-color: rgb(251, 251, 251);
  text-align: left;

  .el-menu {
    border-right: none;
  }

  .el-link {
    margin-top: 15px;
    margin-bottom: 12px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
