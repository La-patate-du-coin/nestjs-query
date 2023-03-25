import { FilterableField } from '@la-patate-du-coin/nestjs-query-graphql'
import { ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class TestRelationDTO {
  @FilterableField(() => ID)
  id!: string

  @FilterableField()
  testResolverId!: string
}
