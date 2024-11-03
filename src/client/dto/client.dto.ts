import { IsString, IsOptional, IsInt, IsEmail, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ClientDto {
  @ApiProperty({
    example: "david",
    required: true
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: "a@gmail.com",
    required: true
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string; 

  @ApiProperty({
    example: "4245313",
    required: true
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    example: 18,
    required: true
  })
  @Min(0)
  @IsInt()
  age: number; 
}

export class UpdateClientDto {
  @ApiProperty({
    example: "david",
    required: false
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    example: "a@gmail.com",
    required: false
  })
  @IsOptional()
  @IsEmail()
  @IsString()
  email: string; 

  @ApiProperty({
    example: "4245313",
    required: false
  })
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({
    example: 18,
    required: false
  })
  @IsOptional()
  @IsInt()
  age: number; 
}
