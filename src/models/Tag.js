import Model from './Model'

class Tag extends Model {
  static get indexUrl () {
    return this.url('/tags')
  }
  static showUrl (id) {
    return `/tags/${id}`
  }
}

export default Tag
