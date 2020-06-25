import Component from '@glimmer/component'

export default class RadBlockComponent extends Component {
  record = this.args.record

  classNames = this.record.classNames
  content = this.record.content
  link = this.record.link
  tagName = this.record.tagName || 'div'
}
