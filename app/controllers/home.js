import Controller from '@ember/controller'
import ENV from 'impulse-sieve/config/environment'

export default class HomeController extends Controller {
  host = ENV.DS.host

  get mainPicture() {
    return this.model.pictures.get('firstObject')
  }
}
