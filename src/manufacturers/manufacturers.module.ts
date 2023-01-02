import { Module } from "@nestjs/common";
import {
  ManufacturersController,
  TopManufacturersController,
} from "./manufacturers.controller";
import { ManufacturersService } from "./manufacturers.service";

@Module({
  controllers: [ManufacturersController, TopManufacturersController],
  providers: [ManufacturersService],
})
export class ManufacturersModule {}
