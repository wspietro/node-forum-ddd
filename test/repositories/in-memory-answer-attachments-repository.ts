import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'

export class InMemoryAnswerAttachmentsRepository
  implements AnswerAttachmentsRepository
{
  public items: AnswerAttachment[] = []

  async findManyByAnswerId(questionId: string) {
    const answerAttachments = this.items.filter(
      (item) => item.answerId.toString() === questionId,
    )

    return answerAttachments
  }

  async deleteManyByAnswerId(questionId: string) {
    const answerAttachments = this.items.filter(
      (item) => item.answerId.toString() !== questionId,
    )

    this.items = answerAttachments
  }
}
