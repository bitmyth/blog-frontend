<template>
        <div class="column">
            <div class="navbar-start">
                <router-link to="/admin/posts/create" class="navbar-item" exact>
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>new post</strong>
                        </a>
                    </div>
                </router-link>
            </div>
            <posts :config="config"></posts>
        </div>
</template>

<script>
import Posts from '../components/Posts'

export default {
  name: 'AdminPosts',
  data () {
    return {
      config: {
        query: {
          category: this.$route.params.category || null,
          tags: this.$route.query.tags || null
        },
        edit: true
      }
    }
  },
  components: {
    Posts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
