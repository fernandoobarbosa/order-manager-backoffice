import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  // { path: "/register", component: Register },
  // { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  // { path: "/bill", component: Bill, meta: { requiresAuth: true } },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page

  const authRequired = to.matched.some((record) => record.meta.requiresAuth);
  const loggedIn = localStorage.getItem("jwt");

  if (authRequired && !loggedIn) {
    return next("/login");
  }
  next();
});

export default router;
