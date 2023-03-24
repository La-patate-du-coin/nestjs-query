import { QueryService } from '@la-patate-du-coin/nestjs-query-core'
import { TypeOrmQueryService } from '@la-patate-du-coin/nestjs-query-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { TodoItemEntity } from './todo-item.entity'

@QueryService(TodoItemEntity)
export class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {
  constructor(@InjectRepository(TodoItemEntity) repo: Repository<TodoItemEntity>) {
    super(repo, { useSoftDelete: true })
  }
}
