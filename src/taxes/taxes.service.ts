import taxesJson from "@db/taxes.json";
import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { CreateTaxDto, UpdateTaxDto } from "./dto/tax.dto";
import { Tax } from "./entities/tax.entity";

const taxes = plainToClass(Tax, taxesJson);

@Injectable()
export class TaxesService {
  private taxes: Tax[] = taxes;

  create(createTaxDto: CreateTaxDto) {
    return this.taxes[0];
  } 

  findAll() {
    return this.taxes;
  }

  findOne(id: number) {
    return this.taxes.find((tax) => tax.id === Number(id));
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return this.taxes[0];
  }

  remove(id: number) {
    return `This action removes a #${id} tax`;
  }
}
