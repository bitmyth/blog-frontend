<template>
    <div>
        <div class="tile is-parent">
            <article class="tile is-child notification">
                <p class="title">{{post.title}}</p>
                <nav class="level ">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item has-text-centered">
                            <p class="subtitle is-6">
                                <strong>{{post.user.name}}</strong>
                            </p>
                        </div>
                    </div>
                    <!-- Right side -->
                    <div class="level-right">
                        <p class="level-item">{{post.created_at}}</p>
                    </div>
                </nav>
                <nav class="level ">
                    <!-- Right side -->
                    <div class="level-left">
                        <p  class="level-item" v-for="tag in post.tags" :key="tag.id">
                        <span class="tag is-primary" v-text="tag.name"></span></p>
                    </div>
                </nav>
                <p class="subtitle">{{post.excerpt}}</p>
                <div class="content">
                    {{post.content}}
                </div>
            </article>
        </div>
    </div>
</template>
<script>
import Post from '../models/Post'
import moment from 'moment'

export default {
  name: 'Post',
  filter: {
    ago (date) {
      return moment(date).fromNow()
    }
  },
  props: ['post'],
  methods: {
    showRoute (id) {
      return Post.url(`/posts/${id}`)
    }
  }
}
</script>
