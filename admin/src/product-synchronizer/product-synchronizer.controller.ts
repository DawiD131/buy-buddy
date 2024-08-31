import { Controller, Get } from '@nestjs/common';
import { ProductSynchronizerService } from './product-synchronizer.service';

@Controller('product-synchronizer')
export class ProductSynchronizerController {
  constructor(
    private readonly productSynchronizerService: ProductSynchronizerService,
  ) {}

  @Get('/')
  async syncProducts() {
    return this.productSynchronizerService.syncProducts();
  }
}
