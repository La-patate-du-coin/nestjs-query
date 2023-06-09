import { Field, InputType } from '@nestjs/graphql'
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

import { CustomIDScalar } from '../../common/custom-id.scalar'

@InputType('SubTaskInput')
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

  @Field(() => CustomIDScalar)
  @IsNotEmpty()
  todoItemId!: string
}
