import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './components/Home.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: AppHome
    },
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router