import { createRouter, createWebHistory } from "vue-router";
import CaspDev from "@/views/CaspDev.vue";
import HomeView from "../views/HomeView.vue";
import NewSessionView from "@/views/NewSessionView.vue";
import BrowserView from "@/views/BrowserView.vue";
// import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue' // din Auth-sida

import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Auth', 
      component: AuthView, 
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
    },
    {
      path: '/profile',
      name: 'Profil',
      component: ProfileView
    }
    
  ]
});

export default router;
