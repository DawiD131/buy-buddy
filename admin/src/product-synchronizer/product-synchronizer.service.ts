import { Injectable } from '@nestjs/common';
import { ShopifyService } from '../shopify/shopify.service';
import { VectorDbRepository } from './repository/vector-db.repository';
import { TextEmbeddingService } from '../text-embedding/text-embedding.service';

@Injectable()
export class ProductSynchronizerService {
  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly vectorDbRepository: VectorDbRepository,
    private readonly embeddingService: TextEmbeddingService,
  ) {}

  async syncProducts() {
    const points = await this.getPoints();
    try {
      await this.vectorDbRepository.createProductsCollectionIfNotExists();
      await this.vectorDbRepository.upsertProductsCollection(points);

      return { message: 'sync succesfully' };
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  private async getPoints() {
    const { data } = await this.shopifyService.getStoreProducts();

    const points = [];
    for (const product of data.products) {
      const embedding = await this.embeddingService.getEmbedding(
        `product: ${product.title}, description: ${product.body_html}`,
      );

      points.push({
        id: product.id,
        payload: {
          title: product.title,
          description: product.body_html,
          thumbnail_url: product.image.src,
        },
        vector: embedding,
      });
    }

    return points;
  }
}
