import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBotDto } from './bots.dto';
import { BotsService } from './bots.service';

@Controller('bots')
export class BotsController {
  constructor(private botsService: BotsService) {}
  @Get()
  getAllBots() {
    return this.botsService.findAll();
  }

  @Post()
  createBot(@Body() payload: CreateBotDto) {
    return this.botsService.create(payload);
  }
}
