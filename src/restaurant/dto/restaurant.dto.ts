import { IsNotEmpty, IsString, IsInt, IsArray, ArrayNotEmpty, IsOptional, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRestaurantDto {
  @ApiProperty({
    example: 'david',
    required: false
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'calle 54',
    required: false
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    example: 65,
    required: false
  })
  @IsOptional()
  @IsInt()
  capacity?: number;

  @ApiProperty({
    example: [1, 5],
    required: false
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  clients?: number[];
}
export class RestaurantDto { 
  @ApiProperty({
    example: "david",
    required: true
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: "calle 54",
    required: true
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    example: 65,
    required: true
  })
  @IsInt()
  @Min(1)
  capacity: number;

  @ApiProperty({
    example: [1, 5],
    required: false
  })
  @IsArray()
  @IsOptional()
  clients: [];
}