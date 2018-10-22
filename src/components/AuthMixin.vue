<script>
export default {
  name: 'AuthMixin',
  methods: {
    hasRole (role) {
      return this.$store.state.roles.includes(role)
    }
  },
  computed: {
    isAdmin () {
      return this.$store.state.roles.includes('admin')
    },
  }
}
</script>
