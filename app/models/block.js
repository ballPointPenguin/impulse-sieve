import Model, { attr } from '@ember-data/model'

export default class BlockModel extends Model {
  @attr() classNames
  @attr() content
  @attr() link
  @attr() location
  @attr() section
  @attr() tagName
}
