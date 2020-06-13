import Store from '@ember-data/store'

export default class ImpulseStore extends Store {
  async query() {
    try {
      return await super.query(...arguments)
    } catch (error) {
      console.error(error)
      return []
    }
  }
}
