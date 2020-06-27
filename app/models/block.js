import Model, { attr, hasMany } from '@ember-data/model'

export default class BlockModel extends Model {
  @attr() classNames
  @attr() content
  @attr() link
  @attr() section
  @attr() tagName

  @hasMany('page') pages
  @hasMany('picture') pictures
}
