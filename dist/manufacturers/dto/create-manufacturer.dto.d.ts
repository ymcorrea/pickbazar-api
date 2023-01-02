import { Manufacturer } from '../entities/manufacturer.entity';
declare const CreateManufacturerDto_base: import("@nestjs/common").Type<Omit<Manufacturer, "id" | "name" | "type" | "image" | "slug" | "translated_languages" | "type_id" | "description" | "cover_image" | "products_count" | "socials" | "website">>;
export declare class CreateManufacturerDto extends CreateManufacturerDto_base {
    shop_id?: string;
}
export {};
