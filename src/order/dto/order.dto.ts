import { IsString, IsOptional, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty({
    example: 'pizza',
    required: false
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 1,
    required: false
  })
  @IsOptional()
  @IsInt()
  client?: number;

  @ApiProperty({
    example: 1,
    required: false
  })
  @IsOptional()
  @IsInt()
  restaurant?: number;
}

export class OrderDto { 
  @ApiProperty({
    example: 'pizza',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: 1,
    required: true
  })
  @IsNotEmpty()
  @IsInt()
  clientId: number;

  @ApiProperty({
    example: 1,
    required: true
  })
  @IsNotEmpty()
  @IsInt()
  restaurantId: number; 
}