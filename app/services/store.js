import Store from '@ember-data/store'

export default class ImpulseStore extends Store {
  async query() {
    try {
      return super.query(...arguments)
    } catch (error) {
      const { message } = error
      console.error(message)
      return []
    }
  }
}
