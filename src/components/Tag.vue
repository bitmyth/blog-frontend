<template>
        <span class="tag" :class="classObject" @mouseover="onHover" @mouseleave="onHover">
            {{tag.name}}
        </span>
</template>
<script>
export default {
  name: 'Tag',
  props: ['tag'],
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    classObject () {
      return {
        'is-primary': this.isActive,
        'cursor': 'pointer!important'
      }
    }
  },
  methods: {
    onHover () {
      this.isActive = !this.isActive
    }
  }
}
</script>
