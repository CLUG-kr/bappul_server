import { Test, TestingModule } from '@nestjs/testing';
import { BapyakController } from './bapyak.controller';

describe('BapyakController', () => {
  let controller: BapyakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BapyakController],
    }).compile();

    controller = module.get<BapyakController>(BapyakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
