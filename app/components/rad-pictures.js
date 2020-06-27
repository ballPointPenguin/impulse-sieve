import Component from '@glimmer/component'
import ENV from 'impulse-sieve/config/environment'

export default class RadPicturesComponent extends Component {
  host = ENV.DS.host
}
