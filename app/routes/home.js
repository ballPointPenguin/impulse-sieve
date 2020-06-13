import Route from '@ember/routing/route'

export default class HomeRoute extends Route {
  async model() {
    const blocks = await this.store.query('block', { location: 'home' })
    const pictures = await this.store.query('picture', { location: 'home' })

    return { blocks, pictures }
  }
}
