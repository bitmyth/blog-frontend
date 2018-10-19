<template>
    <div>
        <comments :post="postId" refresh="false"></comments>
    </div>
</template>

<script>
import Posts from '../components/Posts'
import Comments from '../components/Comments'

export default {
  name: 'AdminComments',
  data () {
    return {
      postId: null,
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
    Posts,
    Comments
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
