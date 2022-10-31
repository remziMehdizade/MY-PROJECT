import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserinfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
