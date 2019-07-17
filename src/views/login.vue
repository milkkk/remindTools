<template>
  <div class="remind-login">
    <div class="remind-login-form">
      <h3>登录</h3>
      <div class="remind-login-item">
        <input type="text" placeholder="用户名" v-model="userName" />
      </div>
      <div class="remind-login-item">
        <input type="password" placeholder="密码" v-model="password" />
      </div>
      <div class="remind-login-item">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.userName == "" || this.password == "") {
        alert("用户名或密码不能为空");
        return false;
      }
      this.axios.get("/api/login").then(res => {
        console.log(res);
        const data = res.data[0];
        if (
          data["userName"] == this.userName &&
          data["password"] == this.password
        ) {
          sessionStorage.isLogin = true;
          this.$router.push("/index");
        }
      });
    }
  }
};
</script>
<style scoped>
.remind-login {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  position: relative;
}
.remind-login-form {
  width: 400px;
  max-width: 100%;
  border: 1px solid #ccc;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
}
.remind-login-form h3 {
  text-align: center;
}
.remind-login-item {
  width: 100%;
  height: 40px;
  margin-top: 10px;
}
.remind-login-item input {
  padding-left: 10px;
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-appearance: none;
}
.remind-login-item input:focus {
  border: 1px solid rgba(132, 210, 255, 1);
}
.remind-login-item input::placeholder {
  color: #888;
  letter-spacing: 5px;
}
.remind-login-item button {
  width: 100%;
  height: 100%;
  border: none;
  background: orange;
  outline: none;
  color: #fff;
}
</style>

