import { FilterableField, OffsetConnection, PagingStrategies, QueryOptions } from '@la-patate-du-coin/nestjs-query-graphql'
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'

import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('Tag')
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, enableTotalCount: true })
@OffsetConnection('todoItems', () => TodoItemDTO)
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
