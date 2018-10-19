import Model from './Model'

class Category extends Model {
  static indexUrl () {
    return this.url('/categories')
  }
  static showUrl (id) {
    return `/categories/${id}`
  }
}

export default Category
