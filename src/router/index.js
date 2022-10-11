import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router"
import HomeView from "@/views/HomeView.vue"
import OrderView from "@/views/OrderView.vue"
import ProfileView from "@/views/ProfileView.vue"
import CartView from "@/views/CartView.vue"
import SubmitOrderView from "@/views/SubmitOrderView.vue"
import StoreView from "@/views/StoreView.vue"
import StoreItemsView from "@/views/StoreItemsView.vue"
import StoreCommentsView from "@/views/StoreCommentsView.vue"
import StoreIntroductionView from "@/views/StoreIntroductionView.vue"
import LoginView from "@/views/LoginView.vue"
import AddressView from "@/views/AddressView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: HomeView,
      meta: { keepAlive: true },
    },
    {
      path: "/order",
      component: OrderView,
    },
    {
      path: "/profile",
      component: ProfileView,
      meta: { keepAlive: true },
    },
    {
      path: "/cart",
      component: CartView,
    },
    {
      path: "/cart/submit",
      component: SubmitOrderView,
    },
    {
      path: "/store",
      component: StoreView,
      redirect: "/store/items",
      children: [
        {
          path: "/store/items",
          component: StoreItemsView,
        },
        {
          path: "/store/comments",
          component: StoreCommentsView,
        },
        {
          path: "/store/introduction",
          component: StoreIntroductionView,
        },
      ],
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/address",
      component: AddressView,
    },
  ],
})

export default router
