<template>

  <div id="app">
    <router-view/>
  </div>

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";
import SignIn from "./components/SignUp.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Login
  }
};
</script>

<style>
/* body {
  background-image: url("./assets/background.png");
  background-size: cover;
} */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* float: right; */

 
}
</style>
