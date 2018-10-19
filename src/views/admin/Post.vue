<template>
    <layout>
        <div class="hello">
            <div class="tile is-parent">
                <article class="tile is-child notification">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                        <!-- Content -->
                    </div>
                </article>
            </div>
        </div>
    </layout>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
