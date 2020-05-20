import Route from '@ember/routing/route'

export default class HomeRoute extends Route {
  async model() {
    const pictures = await this.store.query('picture', { location: 'home' })

    return { pictures }
  }
}
