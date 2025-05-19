import { createRouter, createWebHistory} from "vue-router";
import Home_Landing_page from "@/Layout/Home_Landing_page.vue";

const routes = [
    {
        path: '/',
        name: 'Home_Landing',
        component: Home_Landing_page,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router