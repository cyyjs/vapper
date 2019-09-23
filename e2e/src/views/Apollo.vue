<template>
  <div id="apollo">
    <h1>Use vapper with vue-apollo</h1>
    <p>{{ allFiles }}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'apollo',
  apollo: {
    // Simple query that will update the 'hello' vue property
    allFiles: gql`query {
      allFiles {
        id
      }
    }`
  }
}
</script>
