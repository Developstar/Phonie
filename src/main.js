import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./Views/LandingPageView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },

    {
      // path: '/:pathMatch(.*)*', component: ErrorPage404
    },
  ],
});

createApp(App).use(router).mount("#app");
