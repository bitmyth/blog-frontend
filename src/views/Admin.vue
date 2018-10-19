<template>
    <layout>
        <div slot="header-nav" class="navbar-start" v-if="isAdmin">
            <router-link to="/admin/posts" class="navbar-item" exact>posts</router-link>
            <router-link to="/admin/comments" class="navbar-item" exact>comments</router-link>
        </div>
        <div class="">
            <breadcrumb></breadcrumb>
            <router-view></router-view>
        </div>
    </layout>
</template>

<script>
import AdminPosts from '../views/AdminPosts'
import Breadcrumb from '../components/Breadcrumb'
import Session from '../models/Session'
export default {
  name: 'Home',
  data () {
    return {
      isAdmin: Session.user && Session.admin
    }
  },
  components: {
    AdminPosts, Breadcrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
