import { CursorConnection } from '@la-patate-du-coin/nestjs-query-graphql'
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql'

import { TagTodoItemDTO } from './tag-todo-item.dto'

@ObjectType('TodoItem')
@Directive('@extends')
@Directive('@key(fields: "id")')
@CursorConnection('tagTodoItems', () => TagTodoItemDTO)
export class TodoItemReferenceDTO {
  @Field(() => ID)
  @Directive('@external')
  id!: number
}
