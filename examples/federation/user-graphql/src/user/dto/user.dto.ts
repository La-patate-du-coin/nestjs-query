import { FilterableField } from '@la-patate-du-coin/nestjs-query-graphql'
import { Directive, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'

@ObjectType('User')
@Directive('@key(fields: "id")')
export class UserDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  name!: string

  @FilterableField()
  email!: string

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date
}
