import RESTSerializer, {
  EmbeddedRecordsMixin
} from '@ember-data/serializer/rest'

export default class ApplicationSerializer extends RESTSerializer.extend({
  EmbeddedRecordsMixin
}) {
  normalize(typeClass, hash, prop) {
    const normalized = super.normalize(...arguments)
    return normalized
  }

  extractRelationship(relationshipModelName, relationshipHash) {
    if (!relationshipHash.type) {
      relationshipHash.type = relationshipModelName
    }

    const normalizedRelationship = super.extractRelationship(
      relationshipModelName,
      relationshipHash
    )

    return normalizedRelationship
  }

  extractRelationships(modelClass, resourceHash) {
    const relationships = super.extractRelationships(modelClass, resourceHash)
    return relationships
  }
}
