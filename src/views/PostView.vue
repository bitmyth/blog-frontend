<template>
    <layout>
        <div class="column is-three-quarters">
        <post :post="post"></post>
        <comments :post="postId" :refresh="refresh"></comments>
        <comment-form :method="method" @store="onStore" v-if="this.$store.state.user"></comment-form>
        <a class="is-link" v-else @click="showLoginForm">Login to leave a comment</a>
        </div>
    </layout>
</template>

<script>
import Post from '../components/Post'
import PostModel from '../models/Post'
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'

export default {
  name: 'PostView',
  components: {
    Post,
    Comments,
    CommentForm
  },
  data () {
    return {
      post: {user: {}},
      postId: this.$route.params.post,
      method: 'post',
      refresh: true
    }
  },
  created () {
    PostModel.one(this.$route.params.post).then((response) => {
      this.post = response.data
    })
  },
  methods: {
    onStore () {
      this.refresh = !this.refresh
    },
    showLoginForm () {
      window.Event.$emit('showLoginForm')
    }
  }
}
</script>
