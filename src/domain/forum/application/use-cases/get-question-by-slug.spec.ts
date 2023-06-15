import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-reposiroty'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Question } from '../../enterprise/entities/question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

// Automatizando processo de criacao do repositorio e do use-case
let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(async () => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  test('it should be able to get a question by slug', async () => {
    const newQuestion = Question.create({
      title: 'Example Question',
      authorId: new UniqueEntityId(),
      content: 'content example question',
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'example-question',
    })

    expect(question.id).toBeTruthy()
    expect(question.slug.value).toEqual(newQuestion.slug.value)
  })
})
