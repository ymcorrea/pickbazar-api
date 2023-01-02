import { Product } from "../entities/product.entity";
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "id" | "created_at" | "updated_at" | "orders" | "type" | "slug" | "translated_languages" | "categories" | "pivot" | "tags" | "related_products">>;
export declare class CreateProductDto extends CreateProductDto_base {
    categories: number[];
    tags: number[];
}
export {};
