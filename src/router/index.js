import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "帝可得",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "帝可得", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "工单管理",
    meta: { title: "工单管理", icon: "el-icon-s-help" },
    children: [
      {
        path: "table",
        name: "运营工单",
        component: () => import("@/views/table/index"),
        meta: { title: "运营工单", icon: "table" },
      },
      {
        path: "tree",
        name: "运维工单",
        component: () => import("@/views/tree/index"),
        meta: { title: "运维工单", icon: "tree" },
      },
    ],
  },

  {
    path: "/goods",
    component: Layout,
    redirect: "/nested/menu1",
    name: "点位管理",
    meta: {
      title: "点位管理",
      icon: "el-icon-map-location",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "区域管理",
        meta: { title: "区域管理" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "点位管理",
        meta: { title: "点位管理" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "合作商管理",
        meta: { title: "合作商管理" },
      },
    ],
  },
  {
    path: "/shebei",
    component: Layout,
    redirect: "/nested/menu1",
    name: "设备管理",
    meta: {
      title: "设备管理",
      icon: "nested",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "设备管理",
        meta: { title: "设备管理" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "设备状态",
        meta: { title: "设备状态" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "设备类型管理",
        meta: { title: "设备类型管理" },
      },
    ],
  },
  {
    path: "/people",
    component: Layout,
    redirect: "/nested/menu1",
    name: "人员管理",
    meta: {
      title: "人员管理",
      icon: "nested",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "人员列表",
        meta: { title: "人员列表" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "人效统计",
        meta: { title: "人效统计" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "工作量列表",
        meta: { title: "工作量列表" },
      },
    ],
  },
  {
    path: "/good",
    component: Layout,
    redirect: "/nested/menu1",
    name: "商品管理",
    meta: {
      title: "商品管理",
      icon: "nested",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "商品类型",
        meta: { title: "商品类型" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "商品管理",
        meta: { title: "商品管理" },
      },
    ],
  },
  {
    path: "/form",
    component: Layout,
    children: [
      {
        path: "index",
        name: "策略管理",
        component: () => import("@/views/form/index"),
        meta: { title: "策略管理", icon: "form" },
      },
    ],
  },
  {
    path: "/order",
    component: Layout,
    children: [
      {
        path: "index",
        name: "订单管理",
        component: () => import("@/views/form/index"),
        meta: { title: "订单管理", icon: "form" },
      },
    ],
  },
  {
    path: "/zhang",
    component: Layout,
    children: [
      {
        path: "index",
        name: "对账统计",
        component: () => import("@/views/form/index"),
        meta: { title: "对账统计", icon: "form" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

