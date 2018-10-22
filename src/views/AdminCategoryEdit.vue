<template>
    <div>
        <category-form :method="method" @resolved="onResolved"></category-form>
    </div>
</template>

<script>
import CategoryForm from '../components/CategoryForm'
export default {
  name: 'AdminCategoryEdit',
  components: {
    CategoryForm
  },
  data () {
    return {
      method: this.$route.params.category === 'create' ? 'post' : 'put'
    }
  },
  methods: {
    onResolved (newCategory) {
      if (this.method === 'post') {
        const category = newCategory.id
        this.$router.push({name: 'AdminCategoryEdit', params: { category }})
      }
    }
  }

}
</script>
