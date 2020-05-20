import Transform from '@ember-data/serializer/transform'

export default class JsonTransform extends Transform {
  deserialize(serialized) {
    // return JSON.parse(serialized)
    return serialized
  }

  serialize(deserialized) {
    return JSON.stringify(deserialized)
  }
}
