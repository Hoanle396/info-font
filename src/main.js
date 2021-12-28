import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import VueRouter from 'vue-router'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.css'
import routes from './routers/router'
import 'bootstrap'
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    created(){
        AOS.init();
    },
    router,
    render: h => h(App),
}).$mount('#app')

