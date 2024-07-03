import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'title is home' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'im about page' },
      beforeEnter: (to, from, next) => {
        console.log('from object')
        console.log(from)
        console.log('to object')
        console.log(to)
        if (to.query.flg) {
          to.meta.title = 'changed message'
          console.log('route flg is ' + from.params.flg)
        }
        next()
      }
    }
  ]
})

export default router
