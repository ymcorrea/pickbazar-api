import { OmitType, PartialType } from "@nestjs/swagger";
import { Tax } from "../entities/tax.entity";

export class CreateTaxDto extends OmitType(Tax, [
  "id",
  "created_at",
  "updated_at",
]) {}
 
export class UpdateTaxDto extends PartialType(CreateTaxDto) {}
