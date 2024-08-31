import { Injectable } from '@nestjs/common';
import { OpenaiService } from '../openai/openai.service';

@Injectable()
export class TextEmbeddingService {
  constructor(private readonly openAiService: OpenaiService) {}

  async getEmbedding(text: string) {
    const aiClient = this.openAiService.getClient();
    const embedding = await aiClient.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
      encoding_format: 'float',
    });

    return embedding.data[0].embedding;
  }
}
