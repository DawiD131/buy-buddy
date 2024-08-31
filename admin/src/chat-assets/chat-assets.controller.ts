import {Controller, Get} from '@nestjs/common';
import {ChatAssetsService} from "./chat-assets.service";

@Controller('chat-assets')
export class ChatAssetsController {
    constructor(private readonly chatAssetsService: ChatAssetsService) {}

    @Get()
    async getChatScript() {
        return this.chatAssetsService.getChatScript();
    }
}
