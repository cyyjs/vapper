import Vue from 'vue'
import VueApollo from 'vue-apollo'
import createRouter from './createRouter'
import createApolloClient from './createApolloClient'
import App from './App.vue'

Vue.config.productionTip = false

// Export factory function
export default function createApp (context) {
  // Create a router instance
  const router = createRouter()

  const apolloClient = createApolloClient(context)
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })

  // Create a app instance
  const app = new Vue({
    apolloProvider,
    router,
    render (h) {
      return this.error ? h('h1', 'custom-error-page') : h(App)
    }
  })

  // 3. return
  return { app, router, apolloProvider }
}
