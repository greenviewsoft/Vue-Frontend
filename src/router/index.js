import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/stores";
import { Index, Shop, SingleProduct, Checkout } from "@/view/pages";
import { UserLogin, UserRegister } from "@/view/auth";
import { SellerPage, SellerStore, SellerApply } from "@/view/pages/seller";
import { MyProfile, MyOrderList, Wishlist } from "@/view/user";

const routes = [
  { path: "/", name: "index.page", component: Index, meta: { title: "Home" } },

  {
    path: "/Shop",
    name: "shop.page",
    component: Shop,
    meta: { title: "Shop" },
  },
  {
    path: "/checkout",
    name: "checkout.page",
    component: Checkout,
    meta: { title: "Checkout" },
  },
  {
    path: "/product/details/",
    name: "product.details",
    component: SingleProduct,
    meta: { title: "Products Details" },
  },
  {
    path: "/seller-list",
    name: "seller.page",
    component: SellerPage,
    meta: { title: "seller-page" },
  },

  {
    path: "/seller-apply",
    name: "Seller.Apply",
    component: SellerApply,
    meta: { title: "seller-apply" },
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
    meta: { title: "Login", guest: true },
  },

  {
    path: "/auth/register",
    name: "user.register",
    component: UserRegister,
    meta: { title: "Register", guest: true },
  },
  {
    path: "/My/profile",
    name: "user.profile",
    component: MyProfile,
    meta: { title: "MyProfile", requiresAuth: true },
  },
  {
    path: "/My/orders",
    name: "user.orders",
    component: MyOrderList,
    meta: { title: "MyProfile", requiresAuth: true },
  },
  {
    path: "/My/wishlist",
    name: "user.wishlist",
    component: Wishlist,
    meta: { title: "Wishlist", requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,
});

const default_title = "404";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || default_title;

  const loggedIn = useAuth();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn.user.meta) {
      next({ name: "user.login" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (loggedIn.user.meta) {
      next({ name: "user.profile" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
