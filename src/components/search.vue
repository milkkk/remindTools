<template>
  <div class="remind-search">
    <div class="remind-search-item" :style="isApp?'width:100%':''">
      <input type="text" placeholder="search..." v-model="content" />
    </div>
    <div class="remind-search-item" :style="isApp?'width:100%':''">
      <input
        type="text"
        v-model="date"
        placeholder="date"
        @click.stop="showTime"
        readonly
        ref="date"
      />
    </div>
    <div class="remind-search-item" :style="isApp?'width:100%':''">
      <button @click="search">search</button>
      <button @click="add">add</button>
    </div>
    <Calendar
      v-if="showDate"
      @choseDay="clickDay"
      @changeMonth="changeDate"
      :style="'position:absolute;top:'+top+'px;left:'+left+'px'"
    ></Calendar>
  </div>
</template>
<script>
import Calendar from "vue-calendar-component";
export default {
  name: "Seach",
  data() {
    return {
      showDate: false,
      date: "",
      isApp: false,
      left: 0,
      top: 0,
      content: ""
    };
  },
  components: {
    Calendar
  },
  methods: {
    clickDay(date) {
      this.date = date;
      var e = window.event;
      this.showDate = false;
      e.stopPropagation();
    },
    changeDate(date) {
      var e = window.event;
      e.stopPropagation();
    },
    App() {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid || isiOS) {
        return true;
      } else {
        return false;
      }
    },
    showTime() {
      this.showDate = !this.showDate;
    },
    search() {
      if (this.content == "" && this.date == "") {
        this.axios.get("/api/getList").then(res => {
          const data = res.data;
          this.$store.commit("listsInit", data);
        });
      } else {
        const payload = {
          content: this.content,
          date: this.date
        };
        this.$store.commit("listSearch", payload);
      }
    },
    add() {
      if (this.content == "" || this.date == "") {
        alert("内容和日期不能为空");
        return false;
      }
      const json = {
        content: this.content,
        date: this.date,
        userid: "__12138",
        isFinish: false
      };
      this.$store.commit("listsAdd", json);
      this.content = this.date = "";
    },
    remove() {}
  },
  mounted() {
    var input = this.$refs.date;
    console.log(input.offsetLeft);
    this.left = input.offsetLeft;
    this.top = input.offsetTop + 40;
    this.isApp = this.App();
    var that = this;
    window.onclick = function() {
      that.showDate = false;
    };
  }
};
</script>
<style scoped>
.remind-search {
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;
}
.remind-search-item {
  width: 320px;
  box-sizing: border-box;
  max-width: 100%;
  height: 40px;
  padding: 0px 10px;
  margin-top: 5px;
}
.remind-search-item input {
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 10px;
  -webkit-appearance: none;
}
.remind-search-item button {
  width: 40%;
  float: left;
  height: 100%;
  margin-left: 5px;
  border: none;
  background: orange;
  outline: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
}
</style>
