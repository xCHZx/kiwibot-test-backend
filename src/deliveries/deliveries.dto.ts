import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
export class CreateDeliveryDto {
  @IsString()
  @IsNotEmpty()
  readonly creation_date: string;

  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @IsNotEmpty()
  readonly pickup: {
    readonly pickup_lat: number;
    readonly pickup_lon: number;
  };

  @IsNotEmpty()
  readonly dropoff: {
    readonly dropoff_lat: number;
    readonly dropoff_lon: number;
  };

  @IsInt()
  @IsNotEmpty()
  readonly zone_id: number;
}

export class UpdateDeliveryDto extends PartialType(CreateDeliveryDto) {}
