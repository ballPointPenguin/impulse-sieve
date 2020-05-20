import Model, { attr } from '@ember-data/model'

export default class PictureModel extends Model {
  @attr alt
  @attr description
  @attr image
  @attr location
  @attr name
}
