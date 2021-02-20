import { Test, TestingModule } from '@nestjs/testing';
import { BapyakCommentController } from './bapyak_comment.controller';

describe('BapyakCommentController', () => {
  let controller: BapyakCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BapyakCommentController],
    }).compile();

    controller = module.get<BapyakCommentController>(BapyakCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
