export default class Errors {
  constructor () {
    this.errors = {}
  }

  has (field) {
    return this.errors.hasOwnProperty(field)
  }

  any () {
    return Object.keys(this.errors).length > 0
  }

  /**
   * retrive the error message for a field
   * @param {string} field
   */
  get (field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  /**
   * record the new errors
   *
   * @param {object} errors
   */
  record (errors) {
    this.errors = errors
  }

  clear (field) {
    if (field) {
      delete this.errors[field]
      return
    }
    this.errors = {}
  }
}
