import { Module } from '@nestjs/common';
import { ChatAssetsModule } from './chat-assets/chat-assets.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ShopifyService } from './shopify/shopify.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ChatAssetsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
    }),
    ConfigModule.forRoot(),
  ],
  providers: [ShopifyService],
})
export class AppModule {}
