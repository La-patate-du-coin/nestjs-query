import { FilterableField, Reference, Relation } from '@la-patate-du-coin/nestjs-query-graphql'
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'

import { TagDTO } from './tag.dto'
import { TodoItemReferenceDTO } from './todo-item-reference.dto'

@ObjectType('TagTodoItem')
@Relation('tag', () => TagDTO)
@Reference('todoItem', () => TodoItemReferenceDTO, { id: 'todoItemId' })
export class TagTodoItemDTO {
  @FilterableField(() => ID)
  tagId!: number

  @FilterableField(() => ID)
  todoItemId!: number

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date
}
