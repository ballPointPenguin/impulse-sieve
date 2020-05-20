import Model, { attr } from '@ember-data/model'

export default class PictureModel extends Model {
  @attr alt
  @attr description
  @attr location
  @attr name

  @attr('json', {
    defaultValue() {
      return defaultImageAttrs
    }
  })
  image
}

const defaultImageAttrs = {
  alternativeText: '',
  caption: '',
  ext: '',
  hash: '',
  height: 0,
  id: '',
  mime: '',
  name: '',
  provider: '',
  related: [],
  size: 0,
  url: '',
  width: 0,
  formats: [
    {
      thumbnail: {
        ext: '',
        hash: '',
        height: 0,
        mime: '',
        path: null,
        size: 0,
        url: '',
        width: 0
      },
      large: {
        ext: '',
        hash: '',
        height: 0,
        mime: '',
        path: null,
        size: 0,
        url: '',
        width: 0
      },
      medium: {
        ext: '',
        hash: '',
        height: 0,
        mime: '',
        path: null,
        size: 0,
        url: '',
        width: 0
      },
      small: {
        ext: '',
        hash: '',
        height: 0,
        mime: '',
        path: null,
        size: 0,
        url: '',
        width: 0
      }
    }
  ]
}
