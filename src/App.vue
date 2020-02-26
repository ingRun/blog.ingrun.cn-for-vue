<template>
  <div id="app">
    <div id="nav">
      <ti></ti>
    </div>


    <div class="con">
      <router-view />
    </div>

    <!-- <drawer /> -->
    <div class="foot">
      <p>
        <el-link>关于博主</el-link>
      </p>
      <p>
        <el-link>注册用户申请</el-link>
      </p>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
import ti from "@/components/title.vue";
// import drawer from "@/components/drawer.vue";

export default {
  components: {
    ti,
    // drawer
  }
};
</script>

<style lang='scss' scoped>
.con {
  // border: 1px solid #ccc;
  // border-radius: 12px;
  min-height: 450px;

  // padding-bottom: 42px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  // background-color: rgb(251, 251, 251);
  // margin-bottom: 22px;
}

.foot {
  background-color: rgb(251, 251, 251);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  min-height: 55px;
  border-radius: 12px;
  padding: 12px;
  margin-top: 15px;
  span {
    color: white !important;
  }
}
</style>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* font-family: "simsun"; */
  color: #2c3e50;
  background-color: rgb(255, 255, 255);

  /* padding-left: 2%;
  padding-right: 2%; */
  /* padding-bottom: 2%; */
}

/* #nav { */
/* padding-top: 22px; */
/* } */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
}
</style>
