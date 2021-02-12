import { Test, TestingModule } from '@nestjs/testing';
import { BapyakService } from './bapyak.service';

describe('BapyakService', () => {
  let service: BapyakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BapyakService],
    }).compile();

    service = module.get<BapyakService>(BapyakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
