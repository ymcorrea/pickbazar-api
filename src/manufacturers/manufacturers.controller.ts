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
import {
  GetManufacturersDto,
  ManufacturerPaginator,
} from "./dto/get-manufactures.dto";
import {
  CreateManufacturerDto,
  GetTopManufacturersDto,
  UpdateManufacturerDto,
} from "./dto/manufacturer.dto";
import { Manufacturer } from "./entities/manufacturer.entity";
import { ManufacturersService } from "./manufacturers.service";

@Controller("manufacturers")
export class ManufacturersController {
  constructor(private readonly manufacturersService: ManufacturersService) {}

  @Post()
  createProduct(@Body() createManufactureDto: CreateManufacturerDto) {
    return this.manufacturersService.create(createManufactureDto);
  }

  @Get()
  async getManufactures(
    @Query() query: GetManufacturersDto,
  ): Promise<ManufacturerPaginator> {
    return this.manufacturersService.getManufactures(query);
  }

  @Get(":slug")
  async getManufactureBySlug(
    @Param("slug") slug: string,
  ): Promise<Manufacturer> {
    return this.manufacturersService.getManufacturesBySlug(slug);
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updateManufacturerDto: UpdateManufacturerDto,
  ) {
    return this.manufacturersService.update(+id, updateManufacturerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.manufacturersService.remove(+id);
  }
}

@Controller("top-manufacturers")
export class TopManufacturersController {
  constructor(private readonly manufacturersService: ManufacturersService) {}

  @Get()
  async getTopManufactures(
    @Query() query: GetTopManufacturersDto,
  ): Promise<Manufacturer[]> {
    return this.manufacturersService.getTopManufactures(query);
  }
}
