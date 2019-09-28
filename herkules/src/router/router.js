import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import Login from "../components/Login"
import Layout from "../components/Layout"
import SignUp from "../components/SignUp.vue"
import ToDo from "../components/todo/ToDo.vue"
import AddTask from "../components/AddTask.vue"

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/',
      name: 'Home',
      component: Layout,
      children: [
          {
            path: '/login',
            name: 'Login',
            component: Login
          },
          {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
          },
          {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
          },
          {
            path: '/todo',
            name: 'ToDo',
            component: ToDo
          },
          {
            path: '/addtask',
            name: 'AddTask',
            component: AddTask
          },
          
      ]
    }
  ]
})
