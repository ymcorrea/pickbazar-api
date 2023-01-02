import { Category } from '../entities/category.entity';
declare const CreateCategoryDto_base: import("@nestjs/common").Type<Pick<Category, "name" | "language" | "type" | "details" | "parent" | "icon" | "image">>;
export declare class CreateCategoryDto extends CreateCategoryDto_base {
}
export {};
