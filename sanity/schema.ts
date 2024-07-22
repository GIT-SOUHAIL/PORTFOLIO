import projects from '@schemas/projects'
import skills from '@schemas/skills'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills,projects],
}
