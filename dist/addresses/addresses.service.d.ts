import { CreateAddressDto, UpdateAddressDto } from "./dto/address.dto";
export declare class AddressesService {
    create(createAddressDto: CreateAddressDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAddressDto: UpdateAddressDto): string;
    remove(id: number): any[];
}
