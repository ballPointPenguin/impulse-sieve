import RESTAdapter from '@ember-data/adapter/rest'
import { pluralize } from 'ember-inflector'
import ENV from 'impulse-sieve/config/environment'

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.DS.host

  async findAll(store, type, sinceToken, snapshotRecordArray) {
    const { modelName } = type
    const collectionName = pluralize(modelName)

    const response = await super.findAll(...arguments)
    return { [collectionName]: response }
  }

  async query(store, type, query) {
    const { modelName } = type
    const collectionName = pluralize(modelName)

    const response = await super.query(...arguments)
    return { [collectionName]: response }
  }
}
