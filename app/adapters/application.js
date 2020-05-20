import RESTAdapter from '@ember-data/adapter/rest'
import ENV from 'impulse-sieve/config/environment'

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.DS.host
}
