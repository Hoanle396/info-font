import Home from "../components/index.vue"
import login from "../components/admin/Login.vue"
import dashboard from "../components/admin/dashboard.vue"
const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: login, name: 'login' },
    { path: '/dashboard', component: dashboard, name: 'dashboard' },
    { path: '*', component: Home, name: 'notfound' },
]
export default routes;