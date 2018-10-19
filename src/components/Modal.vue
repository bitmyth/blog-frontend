<template>
    <div class="modal is-active" v-show="show">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p><slot></slot></p>
        </div>
        <button class="modal-close is-large" @click="close()" aria-label="close"></button>
    </div>
</template>
<script>
export default {
  props: ['show'],
  name: 'Modal',
  data () {
    return {
    }
  },
  methods: {
    close () {
      Event.$emit('closeModal')
    }
  }
}
</script>
