import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 2500 })
  price: number;

  @ApiProperty({ example: 3 })
  in_stock: number;

  @ApiProperty({ example: 0 })
  count: number;

  @ApiProperty({ example: 4686 })
  total_price: number;

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  userid: number;

  @ApiProperty({ example: 'Henry' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 'Salmon' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Aliquid alias.' })
  name: string;

  @ApiProperty({
    example:
      'https://loremflickr.com/640/480/technics?lock=3766199854825472?random=694651922343229194743400173016',
  })
  image: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCardResponse extends ShoppingCartItem {}
export class UpdateCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({ example: 1 })
  count: number;
}
export class TotalPriceResponse {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
export class TotalPriceRequest {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
