import Config from './Config'

class Model {
  static indexUrl () {
    return ''
  }

  static buildQuery (params) {
    const esc = encodeURIComponent
    let query = Object.keys(params)
      .map(function (k) {
        if (params[k]) {
          let value
          if (Array.isArray(params[k]) && params[k].length > 0) {
            value = JSON.stringify(params[k])
          } else {
            value = esc(params[k])
          }
          return esc(k) + '=' + value
        }
      })
    query = query.filter((v) => { return Boolean(v) })
    return query.length > 0 ? ('?' + query.join('&')) : ''
  }

  static url (url) {
    return Config.baseUrl + url
  }

  static page (page, then) {
    const url = this.indexUrl() + '?page=' + page
    return window.axios.get(url)
      .then(({data}) => then(data))
  }

  static all (then, params) {
    return window.axios.get(this.indexUrl(params))
      .then(({data}) => then(data))
  }

  static one (id) {
    return window.axios.get(this.indexUrl() + '/' + id)
  }

  static delete (id) {
    return window.axios.delete(this.indexUrl() + '/' + id)
  }
}

export default Model
