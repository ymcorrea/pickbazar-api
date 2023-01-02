import { Product } from "../entities/product.entity";
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "slug" | "id" | "created_at" | "updated_at" | "tags" | "orders" | "pivot" | "categories" | "type" | "related_products" | "translated_languages">>;
export declare class CreateProductDto extends CreateProductDto_base {
    categories: number[];
    tags: number[];
}
export {};
