<template>
  <div class="SignUp">
    <input type="text" placeholder="Your name"/> </br>
    <input type="password" placeholder="Password"> </br>
    <input type="email" placeholder="E-mail"> </br> </br>
    <button>Join Us!</button>
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
.SignUp{
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
