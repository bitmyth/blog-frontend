export default class Session {
  static get userStorageKey () {
    return 'user'
  }

  static get tokenStorageKey () {
    return 'token'
  }
  static get admin () {
    return this.user && this.user.roles && this.user.roles.includes('admin')
  }

  static get roles () {
    return this.user ? this.user.roles : []
  }

  static get user () {
    if (this.token) {
      return JSON.parse(sessionStorage.getItem(this.userStorageKey)) || null
    }
    return false
  }

  static set user (user) {
    if (user) {
      user.roles = user.roles.map((role) => { return role.name })
      sessionStorage.setItem(this.userStorageKey, JSON.stringify(user))
    } else {
      sessionStorage.removeItem(this.userStorageKey)
    }
  }

  static get guest () {
    return !this.user
  }

  static get token () {
    const token = JSON.parse(sessionStorage.getItem(this.tokenStorageKey))
    if (this.validateToken(token)) {
      return token
    } else {
      return {}
    }
  }

  static set token (token) {
    if (token) {
      const now = new Date()
      token.expire_at = parseInt(now.getTime() / 1000, 10) + Number(token.expires_in)
      sessionStorage.setItem(this.tokenStorageKey, JSON.stringify(token))
    } else {
      delete window.axios.defaults.headers.common['Authorization']
      sessionStorage.removeItem(this.tokenStorageKey)
    }
  }

  /**
   * clear token and user
   */
  static clear () {
    this.token = null
    this.user = null
  }

  static validateToken (token) {
    return (token &&
      token.access_token &&
      token.expire_at > (new Date()).getTime() / 1000)
  }
}
