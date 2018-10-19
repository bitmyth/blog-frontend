<template>
    <div class="navbar-end">
        <div class="navbar-item" v-if="!login">
            <div class="buttons">
                <a class="button is-primary" @click="onClickSignup">
                    <strong @click="onClickSignup">Sign up</strong>
                </a>
                <a class="button is-light" @click="onClickSignin">
                    Log in
                </a>
            </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable" v-if="login">
            <router-link class="navbar-link" :to="homepage" exact>{{username}}</router-link>
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
  data: function () {
    return {
      login: !!Session.user,
      username: Session.user.name,
      homepage: Session.admin ? '/admin' : ''
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
      this.login = false
    }
  },
  created () {
    Event.$on('login', () => {
      this.login = true
    })
  }
}
</script>
