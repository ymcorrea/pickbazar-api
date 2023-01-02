import { Author } from "../entities/author.entity";
declare const CreateAuthorDto_base: import("@nestjs/common").Type<Omit<Author, "slug" | "id" | "name" | "bio" | "born" | "cover_image" | "death" | "image" | "languages" | "products_count" | "quote" | "socials" | "translated_languages">>;
export declare class CreateAuthorDto extends CreateAuthorDto_base {
    shop_id?: string;
}
export {};
