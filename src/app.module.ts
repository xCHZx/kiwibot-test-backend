import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { DatabaseModule } from './database/database.module';
import { BotsModule } from './bots/bots.module';

@Module({
  imports: [DeliveriesModule, DatabaseModule, BotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
