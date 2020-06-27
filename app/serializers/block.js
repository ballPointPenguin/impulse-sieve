import ApplicationSerializer from './application'

export default class BlockSerializer extends ApplicationSerializer {
  attrs = {
    pages: { embedded: 'always' },
    pictures: { embedded: 'always' }
  }
}
