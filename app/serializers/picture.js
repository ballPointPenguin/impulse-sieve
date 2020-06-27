import ApplicationSerializer from './application'

export default class PictureSerializer extends ApplicationSerializer {
  attrs = {
    blocks: { embedded: 'always' }
  }
}
