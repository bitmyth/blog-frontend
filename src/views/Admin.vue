<template>
    <layout>
        <div slot="header-nav" class="navbar-start" v-if="isAdmin" :class="{'is-dark':isAdmin}">
            <router-link to="/admin/posts" class="navbar-item" exact>posts</router-link>
            <router-link to="/admin/comments" class="navbar-item" exact>comments</router-link>
            <router-link to="/admin/tags" class="navbar-item" exact>tags</router-link>
            <router-link to="/admin/categories" class="navbar-item" exact>categories</router-link>
        </div>
        <div class="column is-three-quarters">
            <breadcrumb></breadcrumb>
            <router-view></router-view>
        </div>
    </layout>
</template>

<script>
import AdminPosts from '../views/AdminPosts'
import Breadcrumb from '../components/Breadcrumb'
import AuthMixin from '../components/AuthMixin'

export default {
  mixins: [AuthMixin],
  name: 'Home',
  data () {
    return {
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
