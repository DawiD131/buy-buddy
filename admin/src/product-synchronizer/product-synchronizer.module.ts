import { Module } from '@nestjs/common';
import { ProductSynchronizerService } from './product-synchronizer.service';
import { ProductSynchronizerController } from './product-synchronizer.controller';
import { ShopifyService } from '../shopify/shopify.service';
import { ShopifyApiClient } from '../shopify/ShopifyApiClient';
import { QdrantService } from '../qdrant/qdrant.service';
import { VectorDbRepository } from './repository/vector-db.repository';

@Module({
  providers: [
    ProductSynchronizerService,
    ShopifyService,
    ShopifyApiClient,
    QdrantService,
    VectorDbRepository,
  ],
  controllers: [ProductSynchronizerController],
})
export class ProductSynchronizerModule {}
