<template>
  <div id="title">
    <div class="con">
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/">
          <!-- <span class="home">主页</span> -->
          <div class="icon">
            <el-avatar :size="50" src="https://empty" @error="errorHandler">
              <img src="../assets/ingrun.png" />
            </el-avatar>
          </div>
        </el-menu-item>
        <el-menu-item index="/tag" disabled>标签</el-menu-item>
        <el-menu-item index="/show">展示</el-menu-item>
        <el-menu-item index="/addBlog">添加</el-menu-item>
      </el-menu>
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
  margin: auto;
  background-color: rgba(207, 204, 204, 0.2);
  .el-menu {
    padding-left: 5%;
    // position: fixed;
    // width: 100%;
    // background-color: white;
    .home {
      font-size: 16px;
      font-weight: bold;
    }
  }
}

.span {
  padding-top: 12px;
  .el-link {
    font-weight: bold;
  }
}

.icon {
  // padding: 15px;
  height: 80%;
}

// .con::after {
//   content: "";
//   width: 150%;
//   height: 4.375rem;
//   background-color: #fff;
//   left: -25%;
//   bottom: 260px;
//   border-radius: 100%;
//   position: absolute;
// }
</style>