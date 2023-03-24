<template>
  <div id="app">
    <HeaderSection />
    <RouterView></RouterView>
  </div>
</template>

<script>
import HeaderSection from "./components/CrossPageCompo/HeaderSection.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alkatra:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Alkatra", cursive;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
