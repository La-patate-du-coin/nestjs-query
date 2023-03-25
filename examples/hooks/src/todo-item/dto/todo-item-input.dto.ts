import { BeforeCreateMany, BeforeCreateOne } from '@la-patate-du-coin/nestjs-query-graphql'
import { Field, InputType } from '@nestjs/graphql'
import { IsBoolean, IsString, MaxLength } from 'class-validator'

import { CreatedByHook } from '../../hooks'

@InputType('TodoItemInput')
@BeforeCreateOne(CreatedByHook)
@BeforeCreateMany(CreatedByHook)
export class TodoItemInputDTO {
  @IsString()
  @MaxLength(20)
  @Field()
  title!: string

  @IsBoolean()
  @Field()
  completed!: boolean
}
