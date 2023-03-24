import { CursorConnection, FilterableField, IDField } from '@la-patate-du-coin/nestjs-query-graphql'
import { GraphQLISODateTime, ObjectType } from '@nestjs/graphql'

import { CustomIDScalar } from '../../common/custom-id.scalar'
import { SubTaskDTO } from '../../sub-task/dto/sub-task.dto'
import { TagDTO } from '../../tag/dto/tag.dto'

@ObjectType('TodoItem')
@CursorConnection('subTasks', () => SubTaskDTO, { disableRemove: true })
@CursorConnection('tags', () => TagDTO)
export class TodoItemDTO {
  @IDField(() => CustomIDScalar)
  id!: string

  @FilterableField()
  title!: string

  @FilterableField({ nullable: true })
  description?: string

  @FilterableField()
  completed!: boolean

  @FilterableField(() => GraphQLISODateTime, { filterOnly: true })
  created!: Date

  @FilterableField(() => GraphQLISODateTime, { filterOnly: true })
  updated!: Date
}
