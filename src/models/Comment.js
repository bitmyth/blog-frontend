import Model from './Model'

class Comment extends Model {
  static indexUrl (params) {
    let url = '/comments'
    if (params && params.post) {
      url = `/posts/${params.post}/comments`
    } else {
      url = '/comments'
    }
    if (params) {
      url = url + this.buildQuery(params)
    }
    return this.url(url)
  }

  static showUrl (id) {
    return this.url(`/comments/${id}`)
  }

  static showRoute (id) {
    return `/comments/${id}`
  }
}

export default Comment
