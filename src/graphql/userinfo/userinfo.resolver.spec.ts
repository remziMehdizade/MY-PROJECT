import { Test, TestingModule } from '@nestjs/testing';
import { UserinfoResolver } from './userinfo.resolver';
import { UserinfoService } from './userinfo.service';

describe('UserinfoResolver', () => {
  let resolver: UserinfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserinfoResolver, UserinfoService],
    }).compile();

    resolver = module.get<UserinfoResolver>(UserinfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
