import { Tax } from '../entities/tax.entity';
declare const CreateTaxDto_base: import("@nestjs/common").Type<Omit<Tax, "id" | "created_at" | "updated_at">>;
export declare class CreateTaxDto extends CreateTaxDto_base {
}
export {};
