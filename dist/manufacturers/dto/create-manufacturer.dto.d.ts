import { Manufacturer } from '../entities/manufacturer.entity';
declare const CreateManufacturerDto_base: import("@nestjs/common").Type<Omit<Manufacturer, "type" | "id" | "socials" | "name" | "slug" | "translated_languages" | "type_id" | "description" | "image" | "cover_image" | "products_count" | "website">>;
export declare class CreateManufacturerDto extends CreateManufacturerDto_base {
    shop_id?: string;
}
export {};
