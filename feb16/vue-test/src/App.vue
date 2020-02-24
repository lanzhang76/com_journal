<template>
  <div id="app">
    <Com />
  </div>
</template>

<script>
import Com from "./components/Com.vue";

export default {
  name: "App",
  components: {
    Com
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap);
body {
  background-color: black;
  text-align: center;
}

#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
