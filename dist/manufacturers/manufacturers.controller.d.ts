import { GetManufacturersDto, ManufacturerPaginator } from "./dto/get-manufactures.dto";
import { CreateManufacturerDto, GetTopManufacturersDto, UpdateManufacturerDto } from "./dto/manufacturer.dto";
import { Manufacturer } from "./entities/manufacturer.entity";
import { ManufacturersService } from "./manufacturers.service";
export declare class ManufacturersController {
    private readonly manufacturersService;
    constructor(manufacturersService: ManufacturersService);
    createProduct(createManufactureDto: CreateManufacturerDto): Manufacturer;
    getManufactures(query: GetManufacturersDto): Promise<ManufacturerPaginator>;
    getManufactureBySlug(slug: string): Promise<Manufacturer>;
    update(id: string, updateManufacturerDto: UpdateManufacturerDto): Manufacturer;
    remove(id: string): string;
}
export declare class TopManufacturersController {
    private readonly manufacturersService;
    constructor(manufacturersService: ManufacturersService);
    getTopManufactures(query: GetTopManufacturersDto): Promise<Manufacturer[]>;
}
