import { NestjsQueryGraphQLModule } from '@la-patate-du-coin/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@la-patate-du-coin/nestjs-query-typeorm'
import { Module } from '@nestjs/common'

import { TodoItemDTO } from './dto/todo-item.dto'
import { TodoItemInputDTO } from './dto/todo-item-input.dto'
import { TodoItemUpdateDTO } from './dto/todo-item-update.dto'
import { TodoItemEntity } from './todo-item.entity'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
      resolvers: [
        {
          DTOClass: TodoItemDTO,
          EntityClass: TodoItemEntity,
          CreateDTOClass: TodoItemInputDTO,
          UpdateDTOClass: TodoItemUpdateDTO,
          enableSubscriptions: true,
          update: { many: { enableSubscriptions: false } },
          delete: { many: { enableSubscriptions: false } }
        }
      ]
    })
  ]
})
export class TodoItemModule {}
