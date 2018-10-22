<template>
    <div class="control">
        <label class="label">Tags</label>
        <div class="tags">
            <label class="checkbox tag has-text-centered" v-for="tag in tags" :key="tag.id" :value="tag.id">
                <input type="checkbox" @change="onChange()" v-model="tag.checked">
                <div class="has-text-centered"> {{tag.name}}</div>
            </label>
        </div>
    </div>
</template>
<script>
import Tag from '../models/Tag'

export default {
  name: 'TagPicker',
  props: ['field', 'form'],
  data () {
    return {
      tags: [{}]
    }
  },
  methods: {
    onChange: function () {
      const checkedItems = this.tags.filter((tag) => {
        return tag.checked
      })
      let checkedIds = checkedItems.map((tag) => {
        return tag.id
      })
      this.$emit('change', checkedIds)
    }
  },
  created () {
    Tag.all((response) => {
      let tags = response.data
      this.form.tags.forEach(function (entry) {
        for (let i = 0; i < tags.length; i++) {
          if (tags[i].id === entry) {
            tags[i].checked = true
          }
        }
      })
      this.tags = response.data
    })
    this.$on('change', function (value) {
      // console.log(value)
    })
  }
}
</script>
