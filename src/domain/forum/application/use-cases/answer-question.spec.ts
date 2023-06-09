import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

// Automatizando processo de criacao do repositorio e do use-case
let inMemoryAnswerRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Answer', () => {
  beforeEach(async () => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })

  test('it should be able to create answer', async () => {
    const { answer } = await sut.execute({
      content: 'conteudo da resposta',
      instructorId: '1',
      questionId: '1',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswerRepository.items[0].id).toEqual(answer.id)
  })
})
