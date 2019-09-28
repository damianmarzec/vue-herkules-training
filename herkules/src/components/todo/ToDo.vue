<template>
  <div id="ToDo">
      TODOx - {{ msg }}
    <div class="list">
        <ol>
        <li v-bind="name" v-for="item in items">
            x
            {{ item.description }}
        </li>
        </ol>
    </div>

    <input type="text" placeholder="Login"/> <br>
    <input type="password" placeholder="Password"> <br> <br>
    <button>Log in!</button>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data () {
      return {
        msg: "ddsd",
        items: [
            {
                "description" : "John"
            },
            {
                "description" : "Johnny"
            },
        ]
      }
  },
  created(){},
  methods(){}
};

// var appxx = new Vue({
//   el: '#ToDo',
//   data: {
//     msg: 'Hello Vue!'
//   }
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
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
