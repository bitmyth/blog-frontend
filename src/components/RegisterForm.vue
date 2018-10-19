<template>
    <modal :show="show">
        <form method='post' @submit.prevent='onSubmit'
              @keydown='form.errors.clear($event.target.name)' class="card">
            <div class="card-content has-background-white">

                <text-field :form="form" field="name" type="text"></text-field>

                <text-field :form="form" field="email" type="email"></text-field>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="password" placeholder="Password input" autocomplete="current-password"
                               :class="computedClass('password')"
                               v-model="form.password">
                        <span class="icon is-small is-left"> <i class=" fa-user"></i> </span>
                        <span class="icon is-small is-right"> <i class=" fa-check"></i> </span>
                        <p class="help is-danger" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></p>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password Confirm</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="password" placeholder="Password confirm" autocomplete="confirm-password"
                               :class="computedClass('password_confirmation')"
                               v-model="form.password_confirmation">
                        <span class="icon is-small is-left"> <i class=" fa-user"></i> </span>
                        <span class="icon is-small is-right"> <i class=" fa-check"></i> </span>
                    </div>
                    <p class="help is-danger" v-if="form.errors.has('passsword_confirmation')" v-text="form.errors.get('passsword_confirmation')"></p>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-text">Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    </modal>
</template>

<script>
import Form from '../models/Form'
import modal from './Modal'
import Session from '../models/Session'
import TextField from './input/TextField'

export default {
  name: 'RegisterForm',
  components: {
    TextField,
    modal
  },
  data () {
    return {
      show: false,
      form: new Form({
        'name': '',
        'email': '',
        'password': '',
        'password_confirmation': ''
      })
    }
  },
  created () {
    Event.$on('showRegisterForm', () => {
      this.show = true
    })
    Event.$on('closeModal', () => {
      this.show = false
    })
  },
  methods: {
    onSubmit () {
      this.form.post('/register')
        .then(data => {
          Session.token = data
          Session.user = data.user
          this.show = false
          Event.$emit('login')
        })
        .catch(error => console.log(error))
    },
    computedClass (field) {
      return this.form.errors.has(field) ? 'is-danger' : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
