import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import fetch from 'isomorphic-fetch'

// Install the vue plugin
Vue.use(VueApollo)

// Create the apollo client
export default function createApolloClient ({ type }) {
  const isServer = type === 'server'
  const httpLink = new HttpLink({
    fetch,
    // You should use an absolute URL here
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn'
  })

  const cache = new InMemoryCache()

  // If on the client, recover the injected state
  if (!isServer) {
    if (typeof window !== 'undefined') {
      const state = window.__INITIAL_STATE__ && window.__INITIAL_STATE__.$$apolloState
      if (state) {
        // If you have multiple clients, use `state.<client_id>`
        cache.restore(state.defaultClient)
      }
    }
  }

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    ...(isServer ? {
      // Set this on the server to optimize queries when SSR
      ssrMode: true
    } : {
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100
    })
  })

  return apolloClient
}
