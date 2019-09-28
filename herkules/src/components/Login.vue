<template>
  <div class="Login">
    <input type="text" placeholder="Login"/> <br>
    <input type="password" placeholder="Password"> <br> <br>
    <button>Log in!</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Login{
  margin-top:160px;
  margin-right: 200px;
  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
