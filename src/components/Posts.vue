<template>
    <div>
        <!--<div class="loader is-loading" v-show="spinnerVisible"></div>-->
        <div class="pageloader" :class="{'is-active':spinnerVisible}"><span class="title">Loading</span></div>
        <div class="card" v-for="post in posts" v-bind:key="post.id" v-show="posts.length>0">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong v-if="post.user">{{post.user.name}}</strong>
                            <small>{{post.created_at }}</small>
                        </p>
                        <div class="content">
                            <router-link :to="showRoute(post.id)" class="is-link">
                                <h1 class="title">{{post.title}}</h1>
                            </router-link>
                            {{post.excerpt}}
                        </div>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small"> <font-awesome-icon icon=""/></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div class="media-right">
                    <router-link :to="`posts/${post.id}`" v-if="config.edit">
                        <font-awesome-icon icon="edit"/>
                    </router-link>
                </div>
            </article>
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
import Post from '../models/Post'
import moment from 'moment'

export default {
  name: 'Posts',
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
      posts: [{}],
      page: 1,
      pageCount: 1,
      spinnerVisible: false
    }
  },
  methods: {
    fetch (page) {
      Post.page(page, (response) => {
        this.posts = response.data
      })
    },
    showRoute (id) {
      return Post.showRoute(id)
    },
    retrieve () {
      Post.all((response) => {
        this.posts = response.data
        this.pageCount = response.last_page
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
