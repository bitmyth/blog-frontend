import Errors from './Errors'
import Config from './Config'
import axios from 'axios'

export default class Form {
  constructor (data) {
    this.original = data
    for (let field in data) {
      this[field] = data[field]
    }

    this.errors = new Errors()
  }

  /**
   * fetch all revelent data for then form
   */
  data () {
    let data = {}
    for (let property in this.original) {
      data[property] = this[property]
    }

    return data
  }

  reset () {
    for (let field in this.original) {
      this[field] = ''
    }
    this.errors.clear()
  }

  submit (requestType, url) {
    url = Config.baseUrl + url
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess(response.data)
          resolve(response.data)
        })
        .catch(error => {
          this.onFail(error.response.data)
          reject(error.response.data)
        })
    })

    // axios[requestType](url,this.data())
    //  .then(this.onSuccess.bind(this))
    //  .catch(this.onFail.bind(this))
  }

  post (url) {
    return this.submit('post', url)
  }

  put (url) {
    return this.submit('put', url)
  }

  delete (url) {
    return this.submit('delete', url)
  }

  onSuccess (response) {
    console.log(response)
    this.errors.clear()
    this.reset()
  }

  onFail (response) {
    this.errors.record(response.errors)
  }
}
