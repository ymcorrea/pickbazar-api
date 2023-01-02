import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { AddressesService } from "./addresses.service";
import { CreateAddressDto, UpdateAddressDto } from "./dto/address.dto";

@Controller("address")
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  createAddress(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @Get()
  addresses() {
    return this.addressesService.findAll();
  }

  @Get(":id")
  address(@Param("id") id: string) {
    return this.addressesService.findOne(+id);
  }

  @Put(":id")
  updateAddress(
    @Param("id") id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressesService.update(+id, updateAddressDto);
  }

  @Delete(":id")
  deleteAddress(@Param("id") id: string) {
    return this.addressesService.remove(+id);
  }
}
