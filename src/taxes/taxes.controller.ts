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
import { GetTaxesDto } from "./dto/get-taxes.dto";
import { CreateTaxDto, UpdateTaxDto } from "./dto/tax.dto";
import { TaxesService } from "./taxes.service";

@Controller("taxes")
export class TaxesController {
  constructor(private readonly taxesService: TaxesService) {}
 
  @Post()
  create(@Body() createTaxDto: CreateTaxDto) {
    return this.taxesService.create(createTaxDto);
  }

  @Get()
  findAll(@Query() getTaxesDto: GetTaxesDto) {
    return this.taxesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.taxesService.findOne(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateTaxDto: UpdateTaxDto) {
    return this.taxesService.update(+id, updateTaxDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.taxesService.remove(+id);
  }
}
