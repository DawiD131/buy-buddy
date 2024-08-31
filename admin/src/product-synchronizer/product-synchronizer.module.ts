import { Module } from '@nestjs/common';
import { ProductSynchronizerService } from './product-synchronizer.service';
import { ProductSynchronizerController } from './product-synchronizer.controller';
import { ShopifyService } from '../shopify/shopify.service';
import { ShopifyApiClient } from '../shopify/ShopifyApiClient';
import { QdrantService } from '../qdrant/qdrant.service';
import { VectorDbRepository } from './repository/vector-db.repository';
import { OpenaiService } from '../openai/openai.service';
import { TextEmbeddingService } from '../text-embedding/text-embedding.service';

@Module({
  providers: [
    ProductSynchronizerService,
    ShopifyService,
    ShopifyApiClient,
    QdrantService,
    VectorDbRepository,
    OpenaiService,
    TextEmbeddingService,
  ],
  controllers: [ProductSynchronizerController],
})
export class ProductSynchronizerModule {}
