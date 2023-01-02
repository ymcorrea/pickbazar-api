import { Tax } from "../entities/tax.entity";
declare const CreateTaxDto_base: import("@nestjs/common").Type<Omit<Tax, "id" | "created_at" | "updated_at">>;
export declare class CreateTaxDto extends CreateTaxDto_base {
}
declare const UpdateTaxDto_base: import("@nestjs/common").Type<Partial<CreateTaxDto>>;
export declare class UpdateTaxDto extends UpdateTaxDto_base {
}
export {};
