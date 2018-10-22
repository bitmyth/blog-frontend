import Model from './Model'

class Tag extends Model {
  static indexUrl (params) {
    let url = '/tags'
    if (params) {
      url = url + this.buildQuery(params)
    }
    return this.url(url)
  }

  static showUrl (id) {
    return this.url(`/tags/${id}`)
  }

  static showRoute (id) {
    return `/tags/${id}`
  }
}

export default Tag
