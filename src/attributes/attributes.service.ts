import attributesJson from "@db/attributes.json";
import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { CreateAttributeDto } from "./dto/create-attribute.dto";
import { UpdateAttributeDto } from "./dto/update-attribute.dto";
import { Attribute } from "./entities/attribute.entity";

const attributes = plainToClass(Attribute, attributesJson);

@Injectable()
export class AttributesService {
  private attributes: Attribute[] = attributes;

  create(createAttributeDto: CreateAttributeDto) {
    return this.attributes[0];
  }

  findAll() {
    return this.attributes; 
  }

  findOne(param: string) {
    return this.attributes.find(
      (p) => p.id === Number(param) || p.slug === param,
    );
  }

  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return this.attributes[0];
  }

  remove(id: number) {
    return `This action removes a #${id} attribute`;
  }
}
