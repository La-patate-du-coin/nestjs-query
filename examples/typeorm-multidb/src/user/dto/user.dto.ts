import { CursorConnection, FilterableField } from '@la-patate-du-coin/nestjs-query-graphql'
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'

import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('User')
@CursorConnection('todoItems', () => TodoItemDTO)
export class UserDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  firstName!: string

  @FilterableField()
  lastName!: string

  @FilterableField()
  emailAddress!: string

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date
}
