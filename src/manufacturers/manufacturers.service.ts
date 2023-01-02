import manufacturersJson from "@db/manufacturers.json";
import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import Fuse from "fuse.js";
import { paginate } from "../common/pagination/paginate";
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

const manufacturers = plainToClass(Manufacturer, manufacturersJson);

const options = {
  keys: ["name"],
  threshold: 0.3,
};

const fuse = new Fuse(manufacturers, options);

@Injectable()
export class ManufacturersService {
  private manufacturers: Manufacturer[] = manufacturers;

  create(createManufactureDto: CreateManufacturerDto) {
    return this.manufacturers[0];
  }

  async getManufactures({
    limit,
    page,
    search,
  }: GetManufacturersDto): Promise<ManufacturerPaginator> {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Manufacturer[] = this.manufacturers;
    if (search) {
      console.log("search", search);
      const parseSearchParams = search.split(";");
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(":");
        data = fuse.search(value)?.map(({ item }) => item);
      }
    }

    const results = data.slice(startIndex, endIndex);
    const url = `/manufacturers?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  async getTopManufactures({
    limit = 10,
  }: GetTopManufacturersDto): Promise<Manufacturer[]> {
    return manufacturers.slice(0, limit);
  }

  async getManufacturesBySlug(slug: string): Promise<Manufacturer> {
    return this.manufacturers.find(
      (singleManufacture) => singleManufacture.slug === slug,
    );
  }

  update(id: number, updateManufacturesDto: UpdateManufacturerDto) {
    const manufacturer = this.manufacturers.find((p) => p.id === Number(id));

    // Update author
    manufacturer.is_approved = updateManufacturesDto.is_approved ?? true;

    return manufacturer;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
