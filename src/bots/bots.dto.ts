import { IsNotEmpty, IsString, IsInt } from 'class-validator';
export class CreateBotDto {
  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @IsNotEmpty()
  readonly location: {
    readonly dropoff_lat: number;
    readonly dropoff_lon: number;
  };

  @IsInt()
  @IsNotEmpty()
  readonly zone_id: number;
}
