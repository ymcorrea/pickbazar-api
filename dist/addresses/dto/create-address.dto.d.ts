import { Address } from '../entities/address.entity';
declare const CreateAddressDto_base: import("@nestjs/common").Type<Pick<Address, "type" | "title" | "default" | "address">>;
export declare class CreateAddressDto extends CreateAddressDto_base {
    'customer_id': number;
}
export {};
