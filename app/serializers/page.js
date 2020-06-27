import ApplicationSerializer from './application'

export default class PageSerializer extends ApplicationSerializer {
  attrs = {
    blocks: { embedded: 'always' }
  }
}
