<template>
    <article class="media" v-if="comment">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong v-if="comment.user">{{comment.user.name}}</strong>
                    {{comment.created_at}}
                    <br>
                    {{comment.content}}
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item"> <span class="icon is-small"><i class="fas fa-reply"></i></span> </a>
                </div>
            </nav>
        </div>
        <div class="media-right">
            <button class="delete" v-if="canDelete" @click="onDelete"></button>
        </div>
    </article>
</template>
<script>
import Comment from '../models/Comment'

export default {
  name: 'Comment',
  props: [
    'comment',
    'config'
  ],
  methods: {
    onDelete () {
      confirm('Are sure to delete')
      Comment.delete(this.comment.id).then(() => {
        this.$emit('delete')
      })
    }
  },
  computed: {
    canDelete () {
      let user = this.$store.state.user
      return (user && user.id === this.comment.user_id) ||
          this.$store.state.roles.includes('admin')
    }
  }
}
</script>
