<template>
    <form method='post' action='' @submit.prevent='onSubmit'
          @keydown='form.errors.clear($event.target.name)' class="card">
        <div class="card-content has-background-white">

            <text-field field="title" :form="form"></text-field>

            <text-area-field field="excerpt" :form="form"></text-area-field>

            <text-area-field field="content" :form="form"></text-area-field>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" :disabled="form.errors.any()">Submit</button>
                </div>
                <div class="control">
                    <!--<button class="button is-text">Cancel</button>-->
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import Post from '../models/Post'
import Form from '../models/Form'
import moment from 'moment'
import TextField from './input/TextField'
import TextAreaField from './input/TextAreaField'

export default {
  name: 'PostForm',
  components: {TextField, TextAreaField},
  props: ['method'],
  filter: {
    ago (date) {
      return moment(date).fromNow()
    }
  },
  data: function () {
    return {
      post: {},
      form: new Form({})
    }
  },
  methods: {
    showRoute (id) {
      return (`/posts/${id}`)
    },
    onSubmit () {
      this.form[this.method](this.showRoute(this.$route.params.post))
        .then(data => {
          this.post = data
          this.form = new Form(this.post)
          alert('success')
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    Post.one(this.$route.params.post).then((response) => {
      this.post = response.data
      this.form = new Form(this.post)
    })
  }
}
</script>
