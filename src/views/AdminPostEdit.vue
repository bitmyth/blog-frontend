<template>
    <div>
        <post-form :method="method" @resolved="onResolved"></post-form>
    </div>
</template>

<script>
import PostForm from '../components/PostForm'
export default {
  name: 'AdminPostEdit',
  components: {
    PostForm
  },
  data () {
    return {
      method: this.$route.params.post === 'create' ? 'post' : 'put'
    }
  },
  methods: {
    onResolved (newPost) {
      if (this.method === 'post') {
        const post = newPost.id
        this.$router.push({name: 'AdminPostEdit', params: { post }})
      }
    }
  }

}
</script>
