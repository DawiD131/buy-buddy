import { Injectable } from '@nestjs/common';
import { QdrantClient } from '@qdrant/qdrant-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QdrantService {
  constructor(private readonly configService: ConfigService) {}

  getClient() {
    return new QdrantClient({
      url: this.configService.get('QDRANT_URL'),
      apiKey: this.configService.get('QDRANT_TOKEN'),
    });
  }
}
