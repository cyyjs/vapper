<template>
  <h1>redirect</h1>
</template>

<script>
export default {
  name: 'redirect',
  created () {
    this.$$redirect('/bar')
  }
}
</script>
