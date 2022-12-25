import { Product } from '../entities/product.entity';
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "created_at" | "updated_at" | "type" | "id" | "slug" | "orders" | "pivot" | "shop" | "categories" | "tags" | "related_products" | "translated_languages">>;
export declare class CreateProductDto extends CreateProductDto_base {
    categories: number[];
    tags: number[];
}
export {};
