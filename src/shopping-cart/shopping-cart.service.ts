import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ShoppingCart } from './shopping-cart.model';
import { UsersService } from '../users/users.service';
import { BoilerPartsService } from '../boiler-parts/boiler-parts.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart)
    private shoppingCartModel: typeof ShoppingCart,
    private readonly userService: UsersService,
    private readonly boilerPartsService: BoilerPartsService,
  ) {}

  async findAll(userId: number | string): Promise<ShoppingCart[]> {
    return this.shoppingCartModel.findAll({ where: { userId } });
  }

  async add(addToCartDto: AddToCartDto) {
    const cart = new ShoppingCart();
    const user = await this.userService.findOne({
      where: { username: addToCartDto.username },
    });
    const part = await this.boilerPartsService.findOne(addToCartDto.partId);

    cart.userId = user.id;
    cart.partId = part.id;
    cart.boiler_manufacturer = part.boiler_manufacturer;
    cart.price = part.price;
    cart.parts_manufacturer = part.parts_manufacturer;
    cart.name = part.name;
    cart.image = JSON.parse(part.images)[0];
    cart.in_stock = part.in_stock;
    cart.total_price = part.price;

    return cart.save();
  }

  async updateCount(
    count: number | string,
    partId: number | string,
  ): Promise<{ count: number | string }> {
    await this.shoppingCartModel.update({ count }, { where: { partId } });
    const part = await this.shoppingCartModel.findOne({ where: { partId } });
    return { count: part.count };
  }

  async updateTotalPrice(
    total_price: number | string,
    partId: number | string,
  ): Promise<{ total_price: number | string }> {
    await this.shoppingCartModel.update({ total_price }, { where: { partId } });
    const part = await this.shoppingCartModel.findOne({ where: { partId } });
    return { total_price: part.total_price };
  }

  async remove(partId: number | string): Promise<void> {
    const part = await this.shoppingCartModel.findOne({ where: { partId } });
    await part.destroy();
  }

  async removeAll(userId: number | string): Promise<void> {
    await this.shoppingCartModel.destroy({ where: { userId } });
  }
}
