<template>
  <div class="home">
    <el-row>
      <el-col :span='24'>
        <Aside />
      </el-col>

    </el-row>

  </div>
</template>

<script>
// @ is an alias to /src
import Aside from "@/components/aside.vue";

export default {
  name: "home",
  components: {
    Aside
  },
  data() {
    return {
      blog_list: []
    }
  }
  
};
</script>
