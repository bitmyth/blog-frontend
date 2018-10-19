import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import PostView from '@/views/PostView'
import PostsView from '@/views/PostsView'
import NotFound from '@/views/404'
import Login from '@/views/auth/Login'
import Admin from '@/views/Admin'
import AdminPosts from '@/views/AdminPosts'
import AdminComments from '@/views/AdminComments'
import AdminPostEdit from '@/views/AdminPostEdit'
import PostComments from '@/views/PostComments'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'posts',
          name: 'AdminPosts',
          component: AdminPosts
        },
        {
          path: 'posts/:post',
          name: 'AdminPostEdit',
          component: AdminPostEdit
        },
        {
          path: 'comments/:comment',
          name: 'AdminComments',
          component: PostComments
        },
        {
          path: 'comments',
          name: 'AdminComments',
          component: AdminComments
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/posts',
      name: 'Posts',
      component: PostsView
    },
    {
      path: '/posts/:post',
      name: 'PostPreview',
      component: PostView,
      children: [
        {
          path: 'comments',
          component: PostComments
        },
        {
          path: 'comments/:comment',
          component: PostComments
        }
      ]
    },
    {path: '*', component: NotFound}
  ]
})
