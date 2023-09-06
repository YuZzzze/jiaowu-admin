import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from './routeGuards/authGuards';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login')
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layout/CommonLayout'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/Dashboard')
      },
      {
        path: 'commodity',
        component: () => import('@/pages/Commodity')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由守卫
router.beforeEach(authGuard);

export default router;
