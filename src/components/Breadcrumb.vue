<template>
    <div>
        <div class="tile is-parent">
            bread crumb
        </div>
    </div>
</template>
<script>
import Post from '../models/Post'
import moment from 'moment'

export default {
  name: 'Breadcrumb',
  filter: {
    ago (date) {
      return moment(date).fromNow()
    }
  },
  data: function () {
    return {
      statistic: {}
    }
  },
  methods: {
    showRoute (id) {
      return Post.url(`/posts/${id}`)
    }
  },
  created () {
  }
}
</script>
