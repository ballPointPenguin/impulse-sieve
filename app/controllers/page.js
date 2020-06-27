import Controller from '@ember/controller'

export default class PageController extends Controller {
  get headerBlocks() {
    return this.model.blocks
      .filter(block => block.section === 'header')
      .sortBy('order')
  }

  get titleBlocks() {
    return this.model.blocks
      .filter(block => block.section === 'title')
      .sortBy('order')
  }

  get bodyBlocks() {
    return this.model.blocks
      .filter(block => block.section === 'body')
      .sortBy('order')
  }

  get footerBlocks() {
    return this.model.blocks
      .filter(block => block.section === 'footer')
      .sortBy('order')
  }
}
