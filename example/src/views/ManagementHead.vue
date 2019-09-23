<template>
  <div class="about">
    <h1>
      Vapper uses <a href="https://github.com/nuxt/vue-meta">vue-meta</a> to manage head
    </h1>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Management Head',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
