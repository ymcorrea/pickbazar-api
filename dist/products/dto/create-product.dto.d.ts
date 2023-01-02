import { Product } from "../entities/product.entity";
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "slug" | "translated_languages" | "type" | "id" | "created_at" | "updated_at" | "tags" | "orders" | "categories" | "pivot" | "related_products">>;
export declare class CreateProductDto extends CreateProductDto_base {
    categories: number[];
    tags: number[];
}
export {};
