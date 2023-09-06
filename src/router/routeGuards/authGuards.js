export function authGuard(to, from, next) {
	const isAuthenticated = !!localStorage.getItem('token');
	console.log(isAuthenticated, 666, localStorage.getItem('token'));
	if (to.name !== 'Login' && !isAuthenticated) {
		// 如果用户未登录且尝试访问非登录页面，则重定向到登录页面
		next('/login');
	} else {
		next();
	}
}
