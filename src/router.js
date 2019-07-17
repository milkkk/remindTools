import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/login.vue")
    },
    {
      path: "/index",
      name: "Index",
      component: () => import("./views/index.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    if (sessionStorage.isLogin) {
      next();
    } else {
      next("/login");
    }
  }
});
export default router;
