import { Controller, Get } from '@nestjs/common';
import { ProductSynchronizerService } from './product-synchronizer.service';
import { ShopifyService } from '../shopify/shopify.service';
import { VectorDbRepository } from './repository/vector-db.repository';

@Controller('product-synchronizer')
export class ProductSynchronizerController {
  constructor(
    private readonly productSynchronizerService: ProductSynchronizerService,
    private readonly shopifyService: ShopifyService,
    private readonly vectorDbRepository: VectorDbRepository,
  ) {}

  @Get('/')
  async syncProducts() {
    const { data: products } = await this.shopifyService.getStoreProducts();

    return await this.vectorDbRepository.createCollectionIfNotExists();
  }
}
