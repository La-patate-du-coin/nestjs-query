import { BeforeCreateMany, BeforeCreateOne } from '@la-patate-du-coin/nestjs-query-graphql'
import { Field, ID, InputType } from '@nestjs/graphql'
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

import { CreatedByHook } from '../../hooks'

@InputType('SubTaskInput')
@BeforeCreateOne(CreatedByHook)
@BeforeCreateMany(CreatedByHook)
export class CreateSubTaskDTO {
  @Field()
  @IsString()
  @IsNotEmpty()
  title!: string

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string

  @Field()
  @IsBoolean()
  completed!: boolean

  @Field(() => ID)
  @IsNotEmpty()
  todoItemId!: string
}
