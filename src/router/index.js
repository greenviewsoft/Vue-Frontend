import { createRouter, createWebHistory } from "vue-router";
import { Index, Shop, SellerPage, SellerStore } from "@/view/pages";
import { UserLogin, UserRegister } from "@/view/auth";

const routes = [
  { path: "/", name: "index.page", component: Index, meta: { title: "Home" } },

  {
    path: "/Shop",
    name: "shop.page",
    component: Shop,
    meta: { title: "Shop" },
  },
  {
    path: "/seller-list",
    name: "seller.page",
    component: SellerPage,
    meta: { title: "seller-page" },
  },

  {
    path: "/seller-store",
    name: "seller.store",
    component: SellerStore,
    meta: { title: "seller-store" },
  },

  // User Route
  {
    path: "/auth/login",
    name: "user.login",
    component: UserLogin,
    meta: { title: "Login" },
  },
  {
    path: "/auth/register",
    name: "user.register",
    component: UserRegister,
    meta: { title: "Register" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,
});

const default_title = "404";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || default_title;
  next();
});

export default router;
