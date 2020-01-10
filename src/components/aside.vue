<template>
  <div id="aside">
    <div class="con">
      <el-row>
        <el-col>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <div v-for="(item, index) in cla " :key="index">
              <el-submenu :index="index">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item}}</span>
                </template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                  <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-3">选项4</el-menu-item>
              </el-submenu>
            </div>
          </el-menu>
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
      cla: ["python", "java", "vue", "html/css", "other"]
    };
  },
  props: {
    msg: String
  },
  methods: {
    handleOpen(key, keyPath) {
      this.$notify({
        title: "标题名称",
        message: key + " " + keyPath
      });
    },
    handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      this.$notify({
        title: "标题名称",
        message: key + " " + keyPath
      });
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
  text-align: left;

.el-menu{
    border-right: none;
}

}

</style>

<style>

</style>