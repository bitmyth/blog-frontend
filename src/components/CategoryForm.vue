<template>
    <div>
        <form method='category' action='' @submit.prevent='onSubmit'
              @keydown='form.errors.clear($event.target.name)' class="card">
            <div class="card-content has-background-white">

                <text-field field="name" :form="form"></text-field>

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
import Category from '../models/Category'
import Form from '../models/Form'
import moment from 'moment'
import TextField from './input/TextField'
import TextAreaField from './input/TextAreaField'
import CategoryPicker from '../components/CategoryPicker'
import TagPicker from '../components/TagPicker'

export default {
  name: 'CategoryForm',
  components: {TextField, TextAreaField, CategoryPicker, TagPicker},
  props: ['method'],
  filter: {
    ago (date) {
      return moment(date).fromNow()
    }
  },
  data: function () {
    return {
      category: {},
      form: new Form({
        name: '',
        slug: ''
      }),
      classObject: {
        'is-loading': false
      }
    }
  },
  methods: {
    showRoute (id) {
      if (this.method === 'put') {
        return (`/categories/${id}`)
      } else {
        return (`/categories/`)
      }
    },
    onSubmit () {
      this.classObject['is-loading'] = true
      this.form[this.method](this.showRoute(this.$route.params.category))
        .then(data => {
          this.category = data
          this.form = new Form(this.category)
          this.$emit('resolved', this.category)
          this.classObject['is-loading'] = false
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    if (this.$route.params.category !== 'create') {
      Category.one(this.$route.params.category).then((response) => {
        this.category = response.data
        this.form = new Form(this.category)
      })
    }
  }
}
</script>
