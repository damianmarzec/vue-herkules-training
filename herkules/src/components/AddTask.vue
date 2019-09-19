<template>
  <div class="AddTask">
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <br />
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      {{todo.title}}  <button v-on:click="removeTask(todo.id)">Delete</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    },
    removeTask(taskId) {
      for (let index = 0; index < this.todos.length; index++) {
        if (this.todos[index].id === taskId) {
          this.todos.splice(index,1)
        }
        
      }

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.AddTask {
  margin-top: 160px;
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