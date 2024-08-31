import { Injectable } from '@nestjs/common';
import { TextEmbeddingService } from '../text-embedding/text-embedding.service';
import { VectorDbRepository } from './repository/vector-db.repository';

@Injectable()
export class SearchEngineService {
  constructor(
    private readonly embeddingService: TextEmbeddingService,
    private readonly vectorDbRepository: VectorDbRepository,
  ) {}

  async search(query: string) {
    const queryEmbedding = await this.embeddingService.getEmbedding(query);
    return await this.vectorDbRepository.search(queryEmbedding, 'products');
  }
}
