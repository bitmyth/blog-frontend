<template>
    <modal :show="show">
        <form method='post' action='/projects' @submit.prevent='onSubmit'
              @keydown='form.errors.clear($event.target.name)' class="card">
            <div class="card-content has-background-white">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email input" autocomplete="email"
                               :class="computedClass('email')"
                               v-model="form.email">
                        <span class="icon is-small is-left"> <i class=" fa-envelope"></i> </span>
                        <span class="icon is-small is-right"> <i class=" fa-exclamation-triangle"></i> </span>
                    </div>
                    <p class="help is-danger" v-if="form.errors.has('email')">This email is invalid</p>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="password" placeholder="Password input" autocomplete="current-password"
                               :class="computedClass('PASSWORD')"
                               v-model="form.password">
                        <span class="icon is-small is-left"> <i class=" fa-user"></i> </span>
                        <span class="icon is-small is-right"> <i class=" fa-check"></i> </span>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
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

export default {
  name: 'LoginForm',
  components: {
    modal
  },
  data () {
    return {
      show: false,
      form: new Form({
        'email': '',
        'password': ''
      })
    }
  },
  created () {
    Event.$on('showLoginForm', () => {
      this.show = true
    })
    Event.$on('closeModal', () => {
      this.show = false
    })
  },
  methods: {
    onSubmit () {
      this.form.post('/login')
        .then(data => {
          Session.token = data
          Session.user = data.user
          this.show = false
          Event.$emit('login', data.user)
          this.$store.commit('login', data.user)
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
