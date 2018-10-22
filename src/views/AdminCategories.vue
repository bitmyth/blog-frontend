<template>
        <div class="column">
            <div class="navbar-start">
                <router-link to="/admin/categories/create" class="navbar-item" exact>
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>new category</strong>
                        </a>
                    </div>
                </router-link>
            </div>
            <categories :config="config"></categories>
        </div>
</template>

<script>
import Categories from '../components/Categories'

export default {
  name: 'AdminCategories',
  data () {
    return {
      config: {
        query: {
          category: this.$route.params.category || null,
          tags: this.$route.query.tags || null
        },
        edit: true
      }
    }
  },
  components: {
    Categories
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
