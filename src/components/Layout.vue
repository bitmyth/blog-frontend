<template>
    <div class="">
        <login-form></login-form>
        <register-form></register-form>
        <nav class="navbar" role="navigation" aria-label="main navigation" :class="{'is-success':hasRole('admin')}">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <slot name="header-nav">
                    <div class="navbar-start">
                        <router-link to="/" class="navbar-item">Home</router-link>
                        <category-links></category-links>
                        <router-link to="/about" class="navbar-item">About</router-link>

                    </div>
                </slot>
                <auth-link></auth-link>
            </div>
        </nav>
        <section class="section">
            <div class="container">
                <div class="columns is-mobile">
                    <slot>
                    </slot>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <slot name="footer"></slot>
            </div>
        </section>
    </div>
</template>

<script>
import AuthLink from './AuthLinks'
import CategoryLinks from './CategoryLinks'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import AuthMixin from '../components/AuthMixin'

export default {
  mixins: [AuthMixin],
  name: 'layout',
  components: {
    LoginForm,
    RegisterForm,
    AuthLink,
    CategoryLinks
  },
  data () {
    return {
      msg: 'to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
