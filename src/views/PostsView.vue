<template>
    <layout>
        <div class="column is-three-quarters">
            <posts :config="config"></posts>
        </div>
        <div class="column">
            <slot name="right-bar">
            </slot>
        </div>
    </layout>
</template>

<script>
import Posts from '../components/Posts'

export default {
  name: 'PostsView',
  data () {
    return {
      config: {
        query: {
          category: this.$route.query.category || null,
          tags: this.$route.query.tags || null
        }
      }
    }
  },
  components: {
    Posts
  },
  watch: {
    '$route' () {
      this.config.query.category = this.$route.query.category || null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
