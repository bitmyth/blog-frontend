<template>
    <div class="">
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
