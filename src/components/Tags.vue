<template>
    <div class="card">
        <div class="card-header has-text-centered">
            <span class="is-2"> Tags</span>
        </div>
        <div class="tags card-content">
            <tag class="tag " :tag="tag" v-for="tag in tags" v-bind:key="tag.id"></tag>
        </div>
    </div>
</template>
<script>
import TagModel from '../models/Tag'
import Tag from '../components/Tag'
import moment from 'moment'

export default {
  name: 'Tags',
  filter: {
    ago (date) {
      return moment(date).fromNow()
    }
  },
  props: {
    config: {
      query: {
        category: '',
        tags: []
      }
    }
  },
  data: function () {
    return {
      tags: [{}],
      page: 1,
      pageCount: 1
    }
  },
  methods: {
    fetch (page) {
      TagModel.page(page, (response) => {
        this.tags = response.data
      })
    },
    showRoute (id) {
      return Tag.showRoute(id)
    },
    retrieve () {
      TagModel.all((response) => {
        this.tags = response.data
        this.pageCount = response.last_page
      }, this.config.query)
    }
  },
  created: function () {
    this.retrieve()
  },
  watch: {
    'config.query.category' () {
      this.retrieve()
    }
  },
  components: {
    Tag
  }
}
</script>
