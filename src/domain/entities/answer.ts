import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface AnswerProps {
  questionId: string
  authorId: UniqueEntityId
  content: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  // como estava antes da superclasse entity
  // public content: string
  // public authorId: string
  // public questionId: string

  get content() {
    return this.props.content
  }

  // constructor(props: AnswerProps, id?: string) {
  //   super(props, id)
  // }
} 