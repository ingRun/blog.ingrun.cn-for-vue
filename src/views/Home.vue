<template>
  <div class="home">
    <el-row>
      <el-col :span='24'>
        <MyAside />
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import MyAside from "@/components/aside.vue";

export default {
  name: "home",
  components: {
    MyAside
  },
  data() {
    return {
      blog_list: []
    }
  }
  
};
</script>
