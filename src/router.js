import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './components/Home/Home.vue';
import ContactUs from './components/Contact/ContactUs.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: AppHome
    },
    {
      path: '/contactus',
      name: 'Contact',
      component: ContactUs
    },
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router