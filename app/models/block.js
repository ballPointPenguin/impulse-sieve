import Model, { attr, hasMany } from '@ember-data/model'

export default class BlockModel extends Model {
  @attr() classNames
  @attr() content
  @attr() link
  @attr() section
  @attr() tagName
  @attr('number') order

  @hasMany('page') pages
  @hasMany('picture') pictures
}
