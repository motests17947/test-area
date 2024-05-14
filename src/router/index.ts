import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/self',
      name: 'self',
      component: () => import('@/layouts/SimpleLayout.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('@/pages/self/SelfIndex.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ]
})

export default router
