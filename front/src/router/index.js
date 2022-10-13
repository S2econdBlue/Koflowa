import { createRouter, createWebHistory } from "vue-router";
import authRouter from "./authRouter";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRouter,
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
