<template>
  <div id="title">
    <div class="con">
      <div class>
        <h2>ingrun</h2>
        <h3>个人博客</h3>

        <el-button @click="addBlog">add</el-button>
        <el-button @click="home">home</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods:{
    home(){
      this.$router.push('/')
    },

    addBlog(){
      this.$router.push('/addBlog')
    },
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
  background-color: rgb(251, 251, 251)
}

</style>