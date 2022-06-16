<template>
  <div id="app">
    <main>
      <router-view />
    </main>
    <ul>
      <li>mettre drag - drop</li>
      <li>permettre alternative mvt en 2 clics</li>
      <li>regle de supperposition</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
