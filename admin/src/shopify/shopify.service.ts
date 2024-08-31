import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ShopifyApiClient } from './ShopifyApiClient';

@Injectable()
export class ShopifyService {
  constructor(
    private readonly configService: ConfigService,
    private readonly shopifyApiClient: ShopifyApiClient,
  ) {}

  async getStoreProducts() {
    return await this.shopifyApiClient.getInstance().post('/products.json');
  }
}
