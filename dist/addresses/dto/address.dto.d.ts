import { Address } from "../entities/address.entity";
declare const CreateAddressDto_base: import("@nestjs/common").Type<Pick<Address, "type" | "default" | "title" | "address">>;
export declare class CreateAddressDto extends CreateAddressDto_base {
    "customer_id": number;
}
declare const UpdateAddressDto_base: import("@nestjs/common").Type<Partial<CreateAddressDto>>;
export declare class UpdateAddressDto extends UpdateAddressDto_base {
}
export {};
