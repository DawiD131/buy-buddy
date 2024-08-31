import { Injectable } from '@nestjs/common';
import { QdrantService } from '../../qdrant/qdrant.service';

@Injectable()
export class VectorDbRepository {
  constructor(private readonly qdrantService: QdrantService) {}

  async createCollectionIfNotExists() {
    const isCollectionExists = await this.checkCollectionExists('products');
    if (isCollectionExists) return;

    return await this.qdrantService
      .getClient()
      .createCollection('products', {});
  }

  private async checkCollectionExists(name: string) {
    try {
      await this.qdrantService.getClient().getCollection(name);
      return true;
    } catch (error) {
      if (error.status === 404) {
        return null;
      }
      throw error;
    }
  }
}
