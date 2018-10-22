<template>
    <div>
        <!--<div class="loader is-loading" v-show="spinnerVisible"></div>-->
        <div class="pageloader" :class="{'is-active':spinnerVisible}"><span class="title">Loading</span></div>
        <div class="card" v-for="category in categories" v-bind:key="category.id" v-show="categories.length>0">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <div class="content">
                            <router-link :to="showRoute(category.id)" class="is-link">
                                <h1 class="title">{{category.name}}</h1>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="media-right">
                    <router-link :to="`categories/${category.id}`" v-if="config.edit">
                        <font-awesome-icon icon="edit"/>
                    </router-link>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
import Category from '../models/Category'
import moment from 'moment'

export default {
  name: 'Categories',
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
      categories: [{}],
      page: 1,
      pageCount: 1,
      spinnerVisible: false
    }
  },
  methods: {
    fetch (page) {
      Category.page(page, (response) => {
        this.categories = response.data
      })
    },
    showRoute (id) {
      return Category.showRoute(id)
    },
    retrieve () {
      Category.all((response) => {
        this.categories = response
      }, this.config.query)
    },
    showSpinner () {
      console.log('show spinner')
      this.spinnerVisible = true
    },
    hideSpinner () {
      console.log('hide spinner')
      this.spinnerVisible = false
    }
  },
  created () {
    this.retrieve()
    Event.$on('before-request', this.showSpinner)
    Event.$on('request-error', this.hideSpinner)
    Event.$on('after-response', this.hideSpinner)
    Event.$on('response-error', this.hideSpinner)
  },
  beforeDestroy () {
    Event.$off('before-request', this.showSpinner)
    Event.$off('request-error', this.hideSpinner)
    Event.$off('after-response', this.hideSpinner)
    Event.$off('response-error', this.hideSpinner)
  },
  watch: {
    'config.query.category' () {
      this.retrieve()
    }
  }
}
</script>
