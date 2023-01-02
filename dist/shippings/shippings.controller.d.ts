import { GetShippingsDto } from "./dto/get-shippings.dto";
import { CreateShippingDto, UpdateShippingDto } from "./dto/shipping.dto";
import { ShippingsService } from "./shippings.service";
export declare class ShippingsController {
    private readonly shippingsService;
    constructor(shippingsService: ShippingsService);
    create(createShippingDto: CreateShippingDto): import("./entities/shipping.entity").Shipping;
    findAll(query: GetShippingsDto): import("./entities/shipping.entity").Shipping[];
    findOne(id: string): import("./entities/shipping.entity").Shipping;
    update(id: string, updateShippingDto: UpdateShippingDto): import("./entities/shipping.entity").Shipping;
    remove(id: string): string;
}
