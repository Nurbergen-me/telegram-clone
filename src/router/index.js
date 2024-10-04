import Login from "@/views/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
  
export default router;