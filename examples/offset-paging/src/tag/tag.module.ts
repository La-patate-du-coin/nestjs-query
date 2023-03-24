import { NestjsQueryGraphQLModule } from '@la-patate-du-coin/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@la-patate-du-coin/nestjs-query-typeorm'
import { Module } from '@nestjs/common'

import { TagDTO } from './dto/tag.dto'
import { TagInputDTO } from './dto/tag-input.dto'
import { TagEntity } from './tag.entity'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TagEntity])],
      resolvers: [
        {
          DTOClass: TagDTO,
          EntityClass: TagEntity,
          CreateDTOClass: TagInputDTO,
          UpdateDTOClass: TagInputDTO
        }
      ]
    })
  ]
})
export class TagModule {}
