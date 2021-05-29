import Vue from 'vue'
import Router from 'vue-router'

// import PageDashboard from '../page/PageDashboard'
// import PageAbout from '../page/PageAbout'
// import Page404 from '../page/Page404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../page/PageDashboard.vue')
    },
    {
      path: '/dashboard/:page',
      name: 'dashboardPage',
      component: () => import('../page/PageDashboard.vue')
    },
    {
      path: '/dashboard/add/:category',
      name: 'dashboardCategory',
      component: () => import('../page/PageDashboard.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/PageAbout.vue')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('../page/Page404.vue')
    }
  ]
})
const titles = {
  dashboard: 'Приложение',
  about: 'Чё как?',
  NotFound: 'Всё пропало'
}

router.afterEach((to, from) => {
  document.title = titles[to.name]
})

export default router
