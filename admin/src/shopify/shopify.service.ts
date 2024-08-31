import { Injectable } from '@nestjs/common';
import { ShopifyApiClient } from './ShopifyApiClient';

@Injectable()
export class ShopifyService {
  constructor(private readonly shopifyApiClient: ShopifyApiClient) {}

  async getStoreProducts() {
    return await this.shopifyApiClient.getInstance().get('/products.json');
  }
}
