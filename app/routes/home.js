import Route from '@ember/routing/route'

export default class HomeRoute extends Route {
  async model() {
    const response = await this.store.query('page', { path: 'home' })

    return response.get('firstObject')
  }
}
