import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface AnswerProps {
  authorId: UniqueEntityId
  questionId: UniqueEntityId
  content: string
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

  static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityId
  ) {
    const answer = new Answer({
      ...props,
      createdAt: new Date()
    }, id)

    return answer
  }
} 