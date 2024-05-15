import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import Index from '@/views/Index.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/layouts/SimpleLayout.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        }
      ]
    },
    {
      path: '/self',
      name: 'self',
      component: () => import('@/layouts/SimpleLayout.vue'),
      children: [
        {
          path: '',
          name: 'self_index',
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
