import { Injectable } from '@nestjs/common';
import { QdrantService } from '../../qdrant/qdrant.service';

@Injectable()
export class VectorDbRepository {
  constructor(private readonly qdrantService: QdrantService) {}

  async search(embeddedQuery: number[], collectionName: string) {
    const client = this.qdrantService.getClient();

    return await client.search(collectionName, {
      vector: embeddedQuery,
      limit: 1,
    });
  }
}
