<template>
    <layout>
        <div class="">
            <posts :config="config"></posts>
        </div>
    </layout>
</template>

<script>
import Posts from '../components/Posts'
export default {
  name: 'Home',
  data () {
    return {
      config: {
        query: {}
      }
    }
  },
  components: {
    Posts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
