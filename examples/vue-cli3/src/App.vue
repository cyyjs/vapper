<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    console.log(this.$cookie)
  }
}
</script>

<style>
#app {
  color: red;
}
</style>

