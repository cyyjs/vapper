import Vue from 'vue'
import VueRouter from 'vue-router'

// install vue-router
Vue.use(VueRouter)

export default () => {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./views/DataPrefetching.vue'),
        meta: {
          ssr: true // default true
        }
      },
      {
        path: '/redirect',
        component: () => import('./views/Redirect.vue')
      },
      {
        path: '/foo',
        component: () => import('./views/Foo.vue')
      },
      {
        path: '/error',
        component: () => import('./views/Error.vue'),
        meta: {
          ssr: false
        }
      },
      {
        path: '/cache',
        component: () => import('./views/Cache.vue')
      },
      {
        path: '/apollo',
        component: () => import('./views/Apollo.vue')
      },
      {
        path: '/head',
        component: () => import('./views/ManagementHead.vue')
      }
    ]
  })

  router.beforeEach((to, from, next) => {
    if (to.path === '/bar') {
      router.$$redirect('/foo')
      return
    }
    next()
  })

  return router
}
