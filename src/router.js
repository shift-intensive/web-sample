import { createRouter, createWebHistory } from 'vue-router';

import { ROUTES } from '@/utils/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.ROOT,
      name: 'home',
      component: () => import('@/pages/RootPage.vue')
    }
  ]
});

export default router;
