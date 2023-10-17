import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { AnswerCreatedEvent } from '../../enterprise/events/answer-created-event'

export class OnAswerCreated implements EventHandler {
  constructor() {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotification.bind(this),
      AnswerCreatedEvent.name,
    )
  }

  private async sendNewAnswerNotification({ answer }: AnswerCreatedEvent) {
    console.log(answer)
  }
}

// No código que você forneceu, a função .bind(this) é usada para garantir que, quando a função sendNewAnswerNotification for chamada como um retorno de chamada (callback) para DomainEvents.register, o valor de this dentro da função sendNewAnswerNotification seja o mesmo valor de this no contexto da classe OnAswerCreated. Isso é necessário para manter o contexto correto, porque as funções de retorno de chamada geralmente são executadas em um contexto separado e podem não ter acesso direto às propriedades e métodos da instância da classe.

// Em resumo, o .bind(this) está sendo usado para vincular o contexto da instância da classe à função sendNewAnswerNotification, para que ela possa acessar as propriedades e métodos da classe quando for chamada como um retorno de chamada. Isso é uma prática comum em JavaScript/Node.js para garantir que o contexto seja preservado nas funções de retorno de chamada.

// O método bind() é um método nativo em JavaScript que é usado para criar uma nova função que, quando chamada, tem um valor this pré-determinado. Essa nova função é chamada de "função vinculada" e é muito útil em situações onde você deseja garantir que o contexto (o valor de this) seja fixado, independentemente de como a função vinculada seja chamada.
