import Model from './Model'

class Post extends Model {
  static indexUrl (params) {
    let url = '/posts'
    if (params) {
      url = url + this.buildQuery(params)
    }
    return this.url(url)
  }

  static showUrl (id) {
    return this.url(`/posts/${id}`)
  }

  static showRoute (id) {
    return `/posts/${id}`
  }
}

export default Post
