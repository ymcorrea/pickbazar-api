import { GetManufacturersDto, ManufacturerPaginator } from "./dto/get-manufactures.dto";
import { CreateManufacturerDto, GetTopManufacturersDto, UpdateManufacturerDto } from "./dto/manufacturer.dto";
import { Manufacturer } from "./entities/manufacturer.entity";
export declare class ManufacturersService {
    private manufacturers;
    create(createManufactureDto: CreateManufacturerDto): Manufacturer;
    getManufactures({ limit, page, search, }: GetManufacturersDto): Promise<ManufacturerPaginator>;
    getTopManufactures({ limit, }: GetTopManufacturersDto): Promise<Manufacturer[]>;
    getManufacturesBySlug(slug: string): Promise<Manufacturer>;
    update(id: number, updateManufacturesDto: UpdateManufacturerDto): Manufacturer;
    remove(id: number): string;
}
