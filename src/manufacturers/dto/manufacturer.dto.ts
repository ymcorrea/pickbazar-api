import { OmitType, PartialType } from "@nestjs/swagger";
import { Manufacturer } from "../entities/manufacturer.entity";

export class CreateManufacturerDto extends OmitType(Manufacturer, [
  "id",
  "cover_image",
  "description",
  "image",
  "name",
  "products_count",
  "slug",
  "socials",
  "type",
  "type_id",
  "website",
  "translated_languages",
]) {
  shop_id?: string;
}

export class UpdateManufacturerDto extends PartialType(CreateManufacturerDto) {}

export class GetTopManufacturersDto {
  limit: number;
}
