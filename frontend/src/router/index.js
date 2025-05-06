import { createRouter, createWebHistory } from "vue-router";
import CaspDev from "@/views/CaspDev.vue";
import HomeView from "../views/HomeView.vue";
import NewSessionView from "@/views/NewSessionView.vue";
import BrowserView from "@/views/BrowserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/caspar",
      name: "hearts",
      component: CaspDev
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/new",
      name: "newstory",
      component: NewSessionView
    },
    {
      path: "/browser",
      name: "browser",
      component: BrowserView
    }
  ]
});

export default router;
