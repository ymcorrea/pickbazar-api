import { Body, Controller, Post } from "@nestjs/common";
import { ImportDto } from "./dto/create-import.dto";
import { ImportsService } from "./imports.service";

@Controller()
export class ImportsController {
  constructor(private readonly importsService: ImportsService) {}

  @Post("import-attributes")
  importAttributes(@Body() importAttributesDto: ImportDto) {
    console.log(importAttributesDto);
    return true;
  }
  @Post("import-products")
  importProducts(@Body() importProductsDto: ImportDto) {
    console.log(importProductsDto);
    return true;
  }
  @Post("import-variation-options")
  importVariationOptions(@Body() importVariationOptionsDto: ImportDto) {
    console.log(importVariationOptionsDto);
    return true; 
  }
}
