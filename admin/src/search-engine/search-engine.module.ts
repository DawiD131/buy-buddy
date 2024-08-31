import { Module } from '@nestjs/common';
import { SearchEngineController } from './search-engine.controller';
import { SearchEngineService } from './search-engine.service';
import { VectorDbRepository } from './repository/vector-db.repository';
import { TextEmbeddingService } from '../text-embedding/text-embedding.service';
import { OpenaiService } from '../openai/openai.service';
import { QdrantService } from '../qdrant/qdrant.service';

@Module({
  controllers: [SearchEngineController],
  providers: [
    SearchEngineService,
    VectorDbRepository,
    TextEmbeddingService,
    OpenaiService,
    QdrantService,
  ],
})
export class SearchEngineModule {}
