import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ShopifyApiClient {
  constructor(private readonly configService: ConfigService) {}

  getInstance() {
    return axios.create({
      baseURL: this.configService.get<string>('SHOPIFY_ADMIN_API_URL'),
      headers: {
        'X-Shopify-Access-Token': this.configService.get<string>(
          'SHOPIFY_ACCESS_TOKEN',
        ),
      },
    });
  }
}
