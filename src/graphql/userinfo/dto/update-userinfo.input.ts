import { CreateUserinfoInput } from './create-userinfo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserinfoInput extends PartialType(CreateUserinfoInput) {
  @Field(() => Int)
  id: number;
}
