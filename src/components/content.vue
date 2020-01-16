<template>
  <div id="content">
    <div class="con">
      <div class>
        <mavon-editor
          :value='this.$store.state.blog_contents'
          :subfield="false"
          defaultOpen="preview"
          :editable="false"
          :toolbarsFlag="false"
          fontSize= "16px"
        ></mavon-editor>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: "" //输入的数据
    };
  },
  methods: {
    
    getBlogContents() {
        this.$store.dispatch('getBlogContents', 1)

    }
  }
};
</script>

<style lang='scss' scoped>
.con {
  // border: 1px solid #ccc;
  // border-radius: 12px;
  width: 97%;
  margin-top: 22px;
  // padding: 5px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>