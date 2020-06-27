import Component from '@glimmer/component'

export default class RadBlockComponent extends Component {
  record = this.args.record
  pictures = this.record.get('pictures')

  classNames = this.record.classNames
  content = this.record.content
  link = this.record.link
  tagName = this.record.tagName || 'div'
}
