import Route from '@ember/routing/route'

export default class PageRoute extends Route {
  async model({ path }) {
    const pages = this.store.peekAll('page')
    const page = await pages.find(page => page.path === 'home')
    const blocks = await page.get('blocks')

    return { blocks, page }
  }
}
