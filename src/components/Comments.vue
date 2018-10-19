<template>
    <div>
        <div v-for="comment in comments" :key="comment.id">
            <comment :comment="comment" @delete="retrieve"></comment>
        </div>
        <paginate
                v-model="page"
                :page-count="pageCount"
                :click-handler="fetch"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :page-class="'pagination-link'"
                :container-class="'pagination-list'">
        </paginate>
    </div>
</template>
<script>
import Comment from './Comment'
import CommentModel from '../models/Comment'

export default {
  name: 'Comments',
  props: ['post', 'refresh'],
  data () {
    return {
      comments: [],
      config: {
        query: {
          post: this.post
        }
      },
      page: 1,
      pageCount: 1
    }
  },
  components: {Comment},
  created () {
    this.retrieve()
  },
  methods: {
    retrieve () {
      CommentModel.all((response) => {
        this.comments = response.data
        this.pageCount = response.last_page
      }, this.config.query)
    },
    fetch (page) {
      CommentModel.page(page, (response) => {
        this.posts = response.data
      })
    }
  },
  watch: {
    refresh () {
      this.retrieve()
    }
  }

}
</script>
