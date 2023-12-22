import { Module } from '@nestjs/common';
import { ShoppingCart } from './shopping-cart.model';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartController } from './shopping-cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../users/users.module';
import { BoilerPartsModule } from '../boiler-parts/boiler-parts.module';

@Module({
  imports: [
    SequelizeModule.forFeature([ShoppingCart]),
    UsersModule,
    BoilerPartsModule,
  ],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
  exports: [ShoppingCartService],
})
export class ShoppingCartModule {}
