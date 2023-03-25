import { QueryArgsType } from '@la-patate-du-coin/nestjs-query-graphql'
import { ArgsType } from '@nestjs/graphql'

import { TodoItemDTO } from './dto/todo-item.dto'

@ArgsType()
export class TodoItemQuery extends QueryArgsType(TodoItemDTO) {}

export const TodoItemConnection = TodoItemQuery.ConnectionType
