<template>
  <div class="page">
      <div class="header">
        
        <router-link :to="{ name: 'Login'}">Login</router-link>
        <router-link :to="{ name: 'SignUp'}">Get Started!</router-link>
        <router-link :to="{ name: 'ToDo'}">ToDo</router-link>
         <router-link :to="{ name: 'AddTask'}">ToDo List</router-link>

          <div class="logo">
              To-Do
          </div>
        <router-link :to="{ name: 'About'}">About To-Do</router-link>
      </div>

      <router-view></router-view>
      <div class="main">
        </div>
  </div>
  
</template>

<script>
export default {
  name: "Layout",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  border-bottom: 1px solid gray;
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
  color: #789ada;
  border: 1px solid rgba(12, 104, 104, 0.432);
  padding: 7px;
  cursor: pointer;
  float: right;
  font-size: 17px;
  text-decoration: none;
  font: 400 14px "Gotham Pro",Arial,serif;
 margin-right: 10px;
 font-weight: 700;
 border-radius: 3px;

  
}
a:hover {
  background-color: rgba(235, 230, 230, 0.959);
  transition-duration: 0.4s;
  box-shadow: 0 12px 16px 0 rgba(245, 242, 242, 0.815), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.logo {
    font-family: "URW Chancery L", serif;
    font-size: 40px;
    color: rgba(58, 170, 170, 0.945);
    margin-right: 650px;
    /* padding: 18px; */
    float: left;
   
    
    /* background-image: url("./../assets/logo.png"); */
}

</style>
