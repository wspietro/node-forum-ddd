import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    title: 'Example Question',
    authorId: new UniqueEntityId(),
    slug: Slug.create('example-question'),
    content: 'content example question',
    ...override, // spread: In a situation where one key has another property, the last property overrides the first instance.
  })

  return question
}
