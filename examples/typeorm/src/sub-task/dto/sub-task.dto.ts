import { FilterableField, FilterableRelation, KeySet, QueryOptions } from '@la-patate-du-coin/nestjs-query-graphql'
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'

import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('SubTask')
@KeySet(['id'])
@QueryOptions({ enableTotalCount: true })
@FilterableRelation('todoItem', () => TodoItemDTO, {
  enableLookAhead: true,
  disableRemove: true
})
export class SubTaskDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  title!: string

  @FilterableField({ nullable: true })
  description?: string

  @FilterableField()
  completed!: boolean

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date

  @FilterableField()
  todoItemId!: string

  @FilterableField({ nullable: true })
  createdBy?: string

  @FilterableField({ nullable: true })
  updatedBy?: string
}
