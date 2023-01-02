import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { GetShippingsDto } from "./dto/get-shippings.dto";
import { CreateShippingDto, UpdateShippingDto } from "./dto/shipping.dto";
import { ShippingsService } from "./shippings.service";

@Controller("shippings")
export class ShippingsController {
  constructor(private readonly shippingsService: ShippingsService) {}

  @Post()
  create(@Body() createShippingDto: CreateShippingDto) {
    return this.shippingsService.create(createShippingDto);
  }

  @Get()
  findAll(@Query() query: GetShippingsDto) {
    return this.shippingsService.getShippings(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.shippingsService.findOne(+id);
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updateShippingDto: UpdateShippingDto,
  ) {
    return this.shippingsService.update(+id, updateShippingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.shippingsService.remove(+id);
  }
}
