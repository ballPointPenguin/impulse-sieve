import Route from '@ember/routing/route'

export default class PageRoute extends Route {
  async model({ path }) {
    const response = await this.store.query('page', { path })

    return response.get('firstObject')
  }
}
