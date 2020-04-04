<template>
  <div id="title">
    <div class="con">
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="/">
          <!-- <span class="home">主页</span> -->
          <div class="icon">
            <el-avatar :size="50">
              <img src="../assets/ingrun.png" />
            </el-avatar>
          </div>
        </el-menu-item>
        <el-menu-item index="/tag" disabled>标签</el-menu-item>
        <el-menu-item index="/show">展示</el-menu-item>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-search" @click="search" v-if="is_show"></i>
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="search_value"
              @keyup.enter.native="search()"
              v-else
            ></el-input>
            <!-- <el-button icon="el-icon-search"></el-button> -->
          </template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_show: true,
      search_value: ""
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    addBlog() {
      this.$router.push("/addBlog");
    },
    showBlog() {
      this.$router.push("/show");
    },
    search() {
      if (this.is_show) {
        this.is_show = false;
      } else {
        if (this.search_value) {
          this.$router.push({path:"/search",query:{search_value:this.search_value}})
          this.$router.go(0);  // 强制刷新页面 防止在搜索页面进行搜索不会自动刷新
        }
        this.is_show = true;
      }
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

.title {
  button {
    border: none;
  }
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