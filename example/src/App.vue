<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Data Prefetching</router-link> |
      <router-link to="/apollo">Vue Apollo</router-link> |
      <router-link to="/redirect">Redirect</router-link> |
      <router-link to="/error">Custom Error</router-link> |
      <router-link to="/cache">Cache</router-link> |
      <router-link to="/head">Management Head</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration-line: none;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
