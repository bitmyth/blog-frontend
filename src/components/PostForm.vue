<template>
    <div>
        <category-picker field="category_id" :form="form"></category-picker>
        <tag-picker field="category_id" :form="form" @change="onChange"></tag-picker>
        <form method='post' action='' @submit.prevent='onSubmit'
              @keydown='form.errors.clear($event.target.name)' class="card">
            <div class="card-content has-background-white">

                <text-field field="title" :form="form"></text-field>

                <text-area-field field="excerpt" :form="form"></text-area-field>

                <text-area-field field="content" :form="form"></text-area-field>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link " :class="classObject" :disabled="form.errors.any()">Submit</button>
                    </div>
                    <div class="control">
                        <!--<button class="button is-text">Cancel</button>-->
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import Post from '../models/Post'
import Form from '../models/Form'
import moment from 'moment'
import TextField from './input/TextField'
import TextAreaField from './input/TextAreaField'
import CategoryPicker from '../components/CategoryPicker'
import TagPicker from '../components/TagPicker'

export default {
  name: 'PostForm',
  components: {TextField, TextAreaField, CategoryPicker, TagPicker},
  props: ['method'],
  filter: {
    ago (date) {
      return moment(date).fromNow()
    }
  },
  data: function () {
    return {
      post: {},
      form: new Form({
        title: '',
        excerpt: '',
        content: '',
        name: '',
        category_id: 0,
        tags: []
      }),
      classObject: {
        'is-loading': false
      }
    }
  },
  methods: {
    showRoute (id) {
      if (this.method === 'put') {
        return (`/posts/${id}`)
      } else {
        return (`/posts/`)
      }
    },
    onSubmit () {
      this.classObject['is-loading'] = true
      this.form[this.method](this.showRoute(this.$route.params.post))
        .then(data => {
          this.post = data
          this.attachRelation()
          this.form = new Form(this.post)
          this.$emit('resolved', this.post)
          this.classObject['is-loading'] = false
        })
        .catch(error => console.log(error))
    },
    onChange (tagIds) {
      this.form.tags = tagIds
    },
    attachRelation () {
      this.post.category_id = this.post.category.length > 0 ? this.post.category[0].id : 0
      this.post.tags = this.post.tags.map((tag) => { return tag.id })
    }
  },
  created () {
    if (this.$route.params.post !== 'create') {
      Post.one(this.$route.params.post).then((response) => {
        this.post = response.data
        this.attachRelation()
        this.form = new Form(this.post)
      })
    }
  }
}
</script>
