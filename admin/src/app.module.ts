import { Module } from '@nestjs/common';
import { ChatAssetsModule } from './chat-assets/chat-assets.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ProductSynchronizerModule } from './product-synchronizer/product-synchronizer.module';
import { QdrantService } from './qdrant/qdrant.service';
import { OpenaiService } from './openai/openai.service';
import { TextEmbeddingService } from './text-embedding/text-embedding.service';
import { SearchEngineModule } from './search-engine/search-engine.module';

@Module({
  imports: [
    ChatAssetsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductSynchronizerModule,
    SearchEngineModule,
  ],
  providers: [OpenaiService, TextEmbeddingService],
})
export class AppModule {}
