<template>
        <div class="column">
            <div class="navbar-start">
                <router-link to="/admin/tags/create" class="navbar-item" >
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>new tag</strong>
                        </a>
                    </div>
                </router-link>
            </div>
            <tags :config="config"></tags>
        </div>
</template>

<script>
import Tags from '../components/Tags'

export default {
  name: 'AdminTags',
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
    Tags
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
