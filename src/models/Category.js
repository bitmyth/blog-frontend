import Model from './Model'

class Category extends Model {
  static indexUrl () {
    return this.url('/categories')
  }
  static showRoute (id) {
    return `/categories/${id}`
  }
}

export default Category
