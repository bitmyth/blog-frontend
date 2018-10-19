<template>
    <form method='post' action='' @submit.prevent='onSubmit'
          @keydown='form.errors.clear($event.target.name)' class="card">

        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                </p>
            </figure>
            <div class="media-content">
                <text-area-field field="content" :form="form"></text-area-field>
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <button class="button is-info" :disabled="form.errors.any()">Submit</button>
                        </div>
                    </div>
                </nav>
            </div>
        </article>
    </form>
</template>
<script>
import Form from '../models/Form'
import TextField from './input/TextField'
import TextAreaField from './input/TextAreaField'

export default {
  name: 'CommentForm',
  components: {TextField, TextAreaField},
  props: ['method'],
  data: function () {
    return {
      form: new Form({
        'content': ''
      }),
      comment: {}
    }
  },
  methods: {
    route (id) {
      return (`/posts/${id}/comments`)
    },
    onSubmit () {
      this.form[this.method](this.route(this.$route.params.post))
        .then(data => {
          this.comment = data
          this.$emit('store')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
