import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from './routeGuards/authGuards';

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/pages/Login') // 登录页面组件
	},
	{
		path: '/',
		component: () => import('@/pages/Home'), // 主布局组件
		children: []
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

// 路由守卫
router.beforeEach(authGuard);

export default router;
