<template>
  <div id="aside">
    <div class="con">
      <el-row>
        <el-col             v-for="(item, index) in data"
            :key="index">
          <el-link
            type="primary"

            @click="queryContents(item.id)"
          >{{ item.blog_title }}</el-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "aside",
  data() {
    return {
      cla: ["python", "java", "vue", "html/css", "other"],
      data: ""
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
          this.data = response.data;
        })
        .catch(err => {
          this.isLoading = false;
          this.$toast.fail(err + "");
        });
    },

    queryContents(id) {
      this.$store.dispatch("getBlogContents", id);
    }
  }
};
</script>

<style lang='scss' scoped>
.con {
  border: 1px solid #ccc;
  border-radius: 12px;
  width: 60%;
  padding: 15px;
  min-height: 450px;
  margin-left: 7%;
  margin-top: 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  // text-align: left;

  .el-menu {
    border-right: none;
  }
}
</style>

<style>
</style>