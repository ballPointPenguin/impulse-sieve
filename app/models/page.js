import Model, { attr, hasMany } from '@ember-data/model'

export default class PageModel extends Model {
  @attr() path
  @attr() title
  @attr('boolean') menuLink

  @hasMany('block') blocks
}
