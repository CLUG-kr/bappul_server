import { Test, TestingModule } from '@nestjs/testing';
import { BapyakCommentService } from './bapyak_comment.service';

describe('BapyakCommentService', () => {
  let service: BapyakCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BapyakCommentService],
    }).compile();

    service = module.get<BapyakCommentService>(BapyakCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
