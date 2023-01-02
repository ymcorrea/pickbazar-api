import { Address } from '../entities/address.entity';
declare const CreateAddressDto_base: import("@nestjs/common").Type<Pick<Address, "default" | "title" | "type" | "address">>;
export declare class CreateAddressDto extends CreateAddressDto_base {
    'customer_id': number;
}
export {};
