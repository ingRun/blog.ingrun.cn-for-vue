import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import addBlog from '../views/addBlog.vue'
import show from '../views/showBlog.vue'
import updBlog from '../views/updBlog.vue'
import search from '../views/search.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/addBlog', name: 'addBlog', component: addBlog },
  { path: '/show', name: 'show', component: show },
  { path: '/updBlog', name: 'updBlog', component: updBlog },
  { path: '/search', name: 'search', component: search },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
