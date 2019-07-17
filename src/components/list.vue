<template>
  <div class="remind-list">
    <div class="remind-item" v-for="(item,index) in lists" :key="index" v-show="item.isFinish==false">
      <div class="remind-content">{{item.content}}</div>
      <div class="remind-date">{{item.date}}</div>
      <div class="remind-edit">
        <button @click="item.isFinish=true">完成</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    lists: Array
  },
  mounted() {}
};
</script>
<style scoped>
.remind-list {
  width: 100%;
  height: 100px;
  margin-top: 10px;
}
.remind-item {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  padding: 0px 15px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
.remind-item .remind-content {
  width: 60%;
  height: 100%;
}
.remind-item .remind-date,
.remind-item .remind-edit {
  width: 20%;
  height: 100%;
}
.remind-item .remind-edit {
  padding: 0px 10px;
}
.remind-item button {
  width: 100%;
  height: 30px;
  color: #fff;
  border: none;
  outline: none;
  background: orange;
  border-radius: 4px;
}
</style>