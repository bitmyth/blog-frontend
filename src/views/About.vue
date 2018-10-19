<template>
    <layout>
        <h1 class="title">
            VUE + LARAVEL
        </h1>
        <p class="subtitle">
            My first website with <strong>Bulma</strong>!
        </p>
    </layout>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About Me'
    }
  }

}
</script>

<style scoped>
    .h1 {
        color: green;
    }
</style>
