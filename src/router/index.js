import Vue from "vue";
import VueRouter from "vue-router";

const originalReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

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
        meta: {
          title: "母婴商城首页",
        },
      },
      {
        path: "/home/classify",
        component: () => import("../views/home/classify.vue"),
        meta: {
          title: "分类",
          notRequireAlive: true,
        },
      },
      {
        path: "/home/cart",
        component: () => import("../views/home/cart.vue"),
        meta: {
          requireLogin: true,
          title: "我的购物车",
        },
      },
      {
        path: "/home/mine",
        component: () => import("../views/home/mine.vue"),
        meta: {
          title: "用户中心",
        },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/detail/:id",
    component: () => import("../views/Detail.vue"),
    meta: {
      title: "详情页",
    },
  },
  {
    path: "/address",
    component: () => import("../views/Address.vue"),
    meta: {
      title: "我的收货地址",
    },
  },
  {
    path: "/add",
    component: () => import("../views/Add.vue"),
    meta: {
      title: "新增收货地址",
    },
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "404发生错误",
    },
  },
];

const router = new VueRouter({
  routes,
});

// 全局前置守卫,要和路由元信息配合使用
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "母婴大全,妈妈们的宝典"; // 在跳转之前改标题

  if (to.meta.requireLogin) {
    if (localStorage.getItem("token")) {
      next(); // 放行
    } else {
      next("/login"); // 跳转到登录页,相当于重定向
    }
  } else {
    next(); // 放行
  }
});

export default router;
