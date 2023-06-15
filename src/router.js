import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import SinglePostView from "./views/SinglePostView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/blog/:slug",
      name: "single-post",
      component: SinglePostView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView
    }
  ]
});

export default router;
