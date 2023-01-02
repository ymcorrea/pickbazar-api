import { Shipping } from "../entities/shipping.entity";
declare const CreateShippingDto_base: import("@nestjs/common").Type<Pick<Shipping, "name" | "amount" | "is_global" | "type">>;
export declare class CreateShippingDto extends CreateShippingDto_base {
}
export {};
