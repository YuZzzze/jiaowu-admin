export function authGuard(to, from, next) {
	const isAuthenticated = !!localStorage.getItem('token');
	console.log(to.path !== '/login' && !isAuthenticated);
	if (to.path !== '/login' && !isAuthenticated) {
		// 如果用户未登录且尝试访问非登录页面，则重定向到登录页面
		next('/login');
	} else {
		next();
	}
}
