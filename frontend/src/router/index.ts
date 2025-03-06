import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/layouts/Dashboard.vue'),
      children: [
        {
          path: '/dashboard',
          component: () => import('@/pages/Dashboard.vue'),
        },
      ],
    },
  ],
})

export default router
