<template>
  <div class="remind-index">
    <div class="remind-container">
      <div class="remind-index-header">
        <h3>remind-tools</h3>
      </div>
      <search></search>
      <list :lists="list"></list>
      <div class="remind-index-list"></div>
    </div>
  </div>
</template>
<script>
import search from "../components/search";
import list from "../components/list";
export default {
  name: "Index",
  data() {
    return {};
  },
  components: {
    search,
    list
  },
  computed: {
    list() {
      return this.$store.state.lists;
    }
  },
  methods: {
    load() {
      this.axios.get("/api/getList").then(res => {
        const data = res.data;
        this.$store.commit("listsInit", data);
      });
    }
  },
  mounted() {
    this.load();
  }
};
</script>
<style scoped>
.remind-index {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
}
.remind-container {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
}
.remind-index-header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #888;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
}
</style>