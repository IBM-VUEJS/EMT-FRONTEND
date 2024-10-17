import LoginPage from '@/pages/auth/LoginPage.vue'
import DashboardView from '@/views/DashboardView.vue'
import ReinitialisePasswordPage from '@/pages/auth/ReinitialisePasswordPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/reinitialise-password',
      name: 'reinitialise-password',
      component: ReinitialisePasswordPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: routes
    }
  ]
})

export default router
