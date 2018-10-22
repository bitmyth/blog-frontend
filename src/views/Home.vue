<template>
    <layout>
        <div class="column is-three-quarters">
            <posts :config="config"></posts>
        </div>
        <div class="column">
            <slot name="right-bar">
                <tags :config="tagConfig"></tags>
            </slot>
        </div>
    </layout>
</template>

<script>
import Posts from '../components/Posts'
import Tags from '../components/Tags'
export default {
  name: 'Home',
  data () {
    return {
      config: {
        query: {}
      },
      tagConfig: {
        query: {}
      }
    }
  },
  components: {
    Posts,
    Tags
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
