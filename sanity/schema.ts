import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import galleryImage from './schemas/galleryImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, category, blockContent],
}
