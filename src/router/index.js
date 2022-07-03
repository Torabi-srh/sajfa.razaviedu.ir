import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import ArchiveView from "../views/ArchiveView.vue";
import ArchiveView1 from "../views/ArchiveView1.vue";
import ArchiveView2 from "../views/ArchiveView2.vue";
import PersonDetails from "../views/personal/Personals/PersonDetails.vue";
import Enteghalats from "../views/personal/Enteghalats/IntroView.vue";
import Bazneshates from "../views/personal/Bazneshates/IntroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardView,
    },
    {
      path: "/user/Users/dashboard",
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
    {
      path: "/personal/Personals/person_details",
      name: "person_details",
      component: PersonDetails,
    },
    {
      path: "/personal/Enteghalats/intro",
      name: "enteghalats_view",
      component: Enteghalats,
    },
    {
      path: "/personal/Bazneshates/intro",
      name: "bazneshates_view",
      component: Bazneshates,
    },
  ],
});

export default router;
