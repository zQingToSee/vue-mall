import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"), // 路由懒加载，按需加载
    children: [
      {
        path: "/home",
        redirect: "/home/index",
      },
      {
        path: "/home/index",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/home/classify",
        component: () => import("../views/home/classify.vue"),
      },
      {
        path: "/home/cart",
        component: () => import("../views/home/cart.vue"),
      },
      {
        path: "/home/mine",
        component: () => import("../views/home/mine.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
