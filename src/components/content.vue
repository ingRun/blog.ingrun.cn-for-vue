<template>
  <div id="content">
    <div class="con">
      <el-row>
        <el-col :span="24">
          <mavon-editor
            :value="contents"
            :subfield="false"
            defaultOpen="preview"
            :editable="false"
            :toolbarsFlag="false"
            fontSize="12px"
            previewBackground="#fff"
            :boxShadow="false"
          ></mavon-editor>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog_id: 1
    };
  },
  props: ['contents'],

  mounted() {
    if (this.$store.state.current_blog_id != "") {
      this.blog_id = this.$store.state.current_blog_id;
    }
  },
  methods: {
    getBlogContents() {
      this.$store.dispatch("getBlogContents", 1);
    }
  }
};
</script>

<style lang='scss' scoped>
.con {
  // border: 1px solid #ccc;
  // border-radius: 12px;
  width: 100%;
  margin-top: 22px;
  // padding: 5px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.icon{
  font-size: 13px;
  padding-bottom: 8px;
}
</style>