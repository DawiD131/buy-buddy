import { Module } from '@nestjs/common';
import { ChatAssetsModule } from './chat-assets/chat-assets.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ProductSynchronizerModule } from './product-synchronizer/product-synchronizer.module';
import { QdrantService } from './qdrant/qdrant.service';

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
  ],
})
export class AppModule {}
