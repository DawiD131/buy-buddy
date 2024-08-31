import { Controller, Get, Query } from '@nestjs/common';
import { SearchEngineService } from './search-engine.service';

@Controller('search-engine')
export class SearchEngineController {
  constructor(private readonly searchEngineService: SearchEngineService) {}

  @Get()
  async search(@Query('query') query: string) {
    return await this.searchEngineService.search(query);
  }
}
