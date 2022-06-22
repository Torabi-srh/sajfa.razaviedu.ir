import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import ArchiveView from "../views/ArchiveView.vue";
import ArchiveView1 from "../views/ArchiveView1.vue";
import ArchiveView2 from "../views/ArchiveView2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/archive",
      name: "archive",
      component: ArchiveView,
    },
    {
      path: "/archive2",
      name: "archive2",
      component: ArchiveView1,
    },
    {
      path: "/archive1",
      name: "archive1",
      component: ArchiveView2,
    },
  ],
});

export default router;
