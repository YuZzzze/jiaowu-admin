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
		component: () => import('@/layout/CommonLayout')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

// 路由守卫
router.beforeEach(authGuard);

export default router;
