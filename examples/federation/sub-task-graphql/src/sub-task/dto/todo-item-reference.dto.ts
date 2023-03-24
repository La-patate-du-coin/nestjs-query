import { CursorConnection } from '@la-patate-du-coin/nestjs-query-graphql'
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql'

import { SubTaskDTO } from './sub-task.dto'

@ObjectType('TodoItem')
@Directive('@extends')
@Directive('@key(fields: "id")')
@CursorConnection('subTasks', () => SubTaskDTO)
export class TodoItemReferenceDTO {
  @Field(() => ID)
  @Directive('@external')
  id!: number
}
