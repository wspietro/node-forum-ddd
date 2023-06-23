import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

interface FetchRecentQuestionsRequest {
  page: number // paginação
}

interface FetchRecentQuestionsResponse {
  questions: Question[]
}

export class FetchRecentQuestionsUseCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsRequest): Promise<FetchRecentQuestionsResponse> {
    const questions = await this.questionRepository.findManyRecent({ page })

    return { questions }
  }
}
