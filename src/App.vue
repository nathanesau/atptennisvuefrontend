<template>
  <div id="app">
    <!--<ExampleComponent />-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    <Bracket />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Bracket from "./components/Bracket.vue";
import ExampleComponent from "./components/ExampleComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Bracket,
    ExampleComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-content: center;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
