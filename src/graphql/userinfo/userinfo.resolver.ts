import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserinfoService } from './userinfo.service';
import { Userinfo } from './entities/userinfo.entity';
import { CreateUserinfoInput } from './dto/create-userinfo.input';
import { UpdateUserinfoInput } from './dto/update-userinfo.input';

@Resolver(() => Userinfo)
export class UserinfoResolver {
  constructor(private readonly userinfoService: UserinfoService) {}

  @Mutation(() => Userinfo)
  createUserinfo(@Args('createUserinfoInput') createUserinfoInput: CreateUserinfoInput) {
    return this.userinfoService.create(createUserinfoInput);
  }

  @Query(() => [Userinfo], { name: 'userinfo' })
  findAll() {
    return this.userinfoService.findAll();
  }

  @Query(() => Userinfo, { name: 'userinfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userinfoService.findOne(id);
  }

  @Mutation(() => Userinfo)
  updateUserinfo(@Args('updateUserinfoInput') updateUserinfoInput: UpdateUserinfoInput) {
    return this.userinfoService.update(updateUserinfoInput.id, updateUserinfoInput);
  }

  @Mutation(() => Userinfo)
  removeUserinfo(@Args('id', { type: () => Int }) id: number) {
    return this.userinfoService.remove(id);
  }
}
