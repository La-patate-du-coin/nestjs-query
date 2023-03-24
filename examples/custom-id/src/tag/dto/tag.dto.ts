import { CursorConnection, FilterableField, IDField } from '@la-patate-du-coin/nestjs-query-graphql'
import { GraphQLISODateTime, ObjectType } from '@nestjs/graphql'

import { CustomIDScalar } from '../../common/custom-id.scalar'
import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('Tag')
@CursorConnection('todoItems', () => TodoItemDTO)
export class TagDTO {
  @IDField(() => CustomIDScalar)
  id!: number

  @FilterableField()
  name!: string

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date
}
