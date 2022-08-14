import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto, UpdateDeliveryDto } from './deliveries.dto';

@Controller('deliveries')
export class DeliveriesController {
  constructor(private deliveriesService: DeliveriesService) {}

  @Get()
  getAllDeliveries() {
    return this.deliveriesService.findAll();
  }

  @Get(':id')
  getDeliveryById(@Param('id') id: any) {
    return this.deliveriesService.findById(id);
  }

  @Post()
  createDelivery(@Body() payload: CreateDeliveryDto) {
    return this.deliveriesService.create(payload);
  }

  @Put(':id')
  updateDelivery(@Param('id') id: any, @Body() payload: UpdateDeliveryDto) {
    return this.deliveriesService.update(id, payload);
  }
}
