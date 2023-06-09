import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { DeleteAnswerUserCase } from './delete-answer'
import { makeAnswer } from 'test/factories/make-answer'

// Automatizando processo de criacao do repositorio e do use-case
let inMemoryAswersRepository: InMemoryAnswersRepository
let sut: DeleteAnswerUserCase

describe('Delete Answer', () => {
  beforeEach(async () => {
    inMemoryAswersRepository = new InMemoryAnswersRepository()
    sut = new DeleteAnswerUserCase(inMemoryAswersRepository)
  })

  test('it should be able to delete a Answer', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1'),
    )

    await inMemoryAswersRepository.create(newAnswer)

    await sut.execute({
      authorId: 'author-1', // conferir permissão para deletar
      answerId: 'answer-1',
    })

    expect(inMemoryAswersRepository.items).toHaveLength(0)
  })

  test('it should not be able to delete a Answer from another user', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1'),
    )

    await inMemoryAswersRepository.create(newAnswer)

    expect(() => {
      return sut.execute({
        authorId: 'author-2',
        answerId: 'answer-1',
      })
    }).rejects.toBeInstanceOf(Error)

    expect(inMemoryAswersRepository.items).toHaveLength(1)
  })
})
