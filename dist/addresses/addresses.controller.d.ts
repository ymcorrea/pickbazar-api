import { AddressesService } from "./addresses.service";
import { CreateAddressDto, UpdateAddressDto } from "./dto/address.dto";
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    createAddress(createAddressDto: CreateAddressDto): string;
    addresses(): string;
    address(id: string): string;
    updateAddress(id: string, updateAddressDto: UpdateAddressDto): string;
    deleteAddress(id: string): any[];
}
