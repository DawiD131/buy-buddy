import { Module } from '@nestjs/common';
import { ChatAssetsService } from './chat-assets.service';
import { ChatAssetsController } from './chat-assets.controller';

@Module({
  providers: [ChatAssetsService],
  controllers: [ChatAssetsController]
})
export class ChatAssetsModule {}
