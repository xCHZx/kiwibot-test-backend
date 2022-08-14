import { Module } from '@nestjs/common';
import { BotsController } from './bots.controller';
import { BotsService } from './bots.service';

@Module({
  controllers: [BotsController],
  providers: [BotsService]
})
export class BotsModule {}
