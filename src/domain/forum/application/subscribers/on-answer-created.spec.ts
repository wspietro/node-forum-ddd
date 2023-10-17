import { makeAnswer } from 'test/factories/make-answer'
import { OnAswerCreated } from './on-answer-created'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'

let inMemoryuAnswersRepository: InMemoryAnswersRepository
let inMemoryuAnswerAttachmentRepository: InMemoryAnswerAttachmentsRepository

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryuAnswerAttachmentRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryuAnswersRepository = new InMemoryAnswersRepository(
      inMemoryuAnswerAttachmentRepository,
    )
  })

  it('it should send a notification when an answer is created', async () => {
    const onAnswerCreated = new OnAswerCreated()

    const answer = makeAnswer()

    await inMemoryuAnswersRepository.create(answer)
  })
})
