<template>
  <div class="home">
    <el-row>
      <el-col :span='4'>
        <Aside></Aside>
      </el-col>
      <el-col :span='20'>
        <Content></Content>
      </el-col>
    </el-row>

  </div>
</template>

<script>
// @ is an alias to /src
import Aside from "@/components/aside.vue";
import Content from "@/components/content.vue";

export default {
  name: "home",
  components: {
    Aside,
    Content
  }
  
};
</script>
