import Route from '@ember/routing/route'

export default class HomeRoute extends Route {
  async model() {
    const pages = this.store.peekAll('page')
    const page = await pages.find(page => page.path === 'home')
    const blocks = await page.get('blocks')

    return { blocks, page }
  }
}
