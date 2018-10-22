<template>
    <div class="navbar-end">
        <div class="navbar-item" v-if="!user">
            <div class="buttons">
                <a class="button is-primary" @click="onClickSignup">
                    <strong @click="onClickSignup">Sign up</strong>
                </a>
                <a class="button is-light" @click="onClickSignin">
                    Log in
                </a>
            </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable" v-if="user">
            <router-link class="navbar-link" :to="homepage" exact>{{user.name}}</router-link>
            <div class="navbar-dropdown">
                <a class="navbar-item" @click="onClickSignout"> Logout </a>
            </div>
        </div>
    </div>
</template>
<script>
import Session from '../models/Session'

export default {
  name: 'AuthLink',
  data () {
    return {
      // user: Session.user
    }
  },
  computed: {
    homepage () {
      return this.$store.state.roles.includes('admin') ? '/admin' : '/'
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    onClickSignin () {
      Event.$emit('showLoginForm')
    },
    onClickSignup () {
      Event.$emit('showRegisterForm')
    },
    onClickSignout () {
      Session.clear()
      this.$store.commit('logout')
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
