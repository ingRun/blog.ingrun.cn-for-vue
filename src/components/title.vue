<template>
  <div id="title">
    <div class="con">
      <el-row>
        <el-col :span="12">
          <h2>ingrun</h2>
          <h3>个人博客</h3>
        </el-col>
        <el-col :offset="8" :span="4">
          <!-- <el-button @click="home">home</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button @click="addBlog">add</el-button>-->
          <div class="span">
            <el-link target="_blank" @click="home">Home</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link @click="showBlog">Show</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link @click="addBlog">AddBlog</el-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    },
    addBlog() {
      this.$router.push("/addBlog");
    },
    showBlog() {
      this.$router.push("/show");
    }
  }
};
</script>

<style lang='scss' scoped>
.con {
  border: 1px solid #ccc;
  border-radius: 12px;
  height: 150px;
  width: 100%;
  margin: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgb(251, 251, 251);
}

.span {
  padding-top: 12px;
  .el-link {
    font-weight: bold;
  }
}
</style>