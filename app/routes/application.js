import Route from '@ember/routing/route'

export default class ApplicationRoute extends Route {
  async model() {
    const pages = await this.store.findAll('page')

    // this is the order they will appear in the nav menu
    return pages.sortBy('order')
  }
}
