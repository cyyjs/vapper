<template>
  <div>
    <h2>
      Vapper uses <a href="https://github.com/vue-contrib/vue-ssr-prefetcher">vue-ssr-pretcher</a> to provide powerful and intuitive data prefetching
    </h2>
    <br>
    <div class="data">
      Data: {{ res }}
    </div>
  </div>
</template>

<script>
import fetch from '../fetch'
export default {
  name: 'Home',
  data () {
    return {
      res: {}
    }
  },
  async created () {
    const fetchName = this.$createFetcher(fetch)
    this.res = await fetchName()
  }
}
</script>
