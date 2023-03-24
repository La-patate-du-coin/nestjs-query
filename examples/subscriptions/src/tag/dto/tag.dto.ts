import { CursorConnection, FilterableField } from '@la-patate-du-coin/nestjs-query-graphql'
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'

import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('Tag')
@CursorConnection('todoItems', () => TodoItemDTO)
export class TagDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  name!: string

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date
}
