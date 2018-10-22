<template>
    <div class="control">
        <label class="label">Categories</label>
        <div class="select">
            <select v-model="form[field]">
                <option disabled value="">Please select one</option>
                <option v-for="category in categories" :key="category.id" :value="category.id" >
                    {{category.name}}
                </option>
            </select>
        </div>
    </div>
</template>
<script>
import Category from '../models/Category'

export default {
  name: 'CategoryPicker',
  props: ['field', 'form'],
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
