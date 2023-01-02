import { Category } from '../entities/category.entity';
declare const CreateCategoryDto_base: import("@nestjs/common").Type<Pick<Category, "name" | "language" | "type" | "image" | "details" | "icon" | "parent">>;
export declare class CreateCategoryDto extends CreateCategoryDto_base {
}
export {};
