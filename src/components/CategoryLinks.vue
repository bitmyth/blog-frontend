<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Categories</a>
        <div class="navbar-dropdown">
            <router-link v-for="category in categories" :to="`/posts?category=${category.id}`" class="navbar-item" :key="category.id">
                {{category.name}}
            </router-link>
        </div>
    </div>
</template>
<script>
import Category from '../models/Category'

export default {
  name: 'CategoryLinks',
  data () {
    return {
      categories: [{}]
    }
  },
  methods: {
  },
  created () {
    Category.all((response) => {
      this.categories = response
    })
  }
}
</script>
