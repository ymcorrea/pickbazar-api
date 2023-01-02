import { Manufacturer } from '../entities/manufacturer.entity';
declare const CreateManufacturerDto_base: import("@nestjs/common").Type<Omit<Manufacturer, "translated_languages" | "id" | "cover_image" | "image" | "name" | "products_count" | "slug" | "socials" | "description" | "type" | "type_id" | "website">>;
export declare class CreateManufacturerDto extends CreateManufacturerDto_base {
    shop_id?: string;
}
export {};
