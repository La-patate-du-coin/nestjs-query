import { FilterableField } from '@la-patate-du-coin/nestjs-query-graphql'
import { GraphQLISODateTime, ObjectType } from '@nestjs/graphql'

@ObjectType('User')
export class UserDTO {
  @FilterableField()
  id!: number

  @FilterableField()
  username!: string

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date
}
