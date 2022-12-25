import { Author } from '../entities/author.entity';
declare const CreateAuthorDto_base: import("@nestjs/common").Type<Omit<Author, "id" | "bio" | "socials" | "name" | "slug" | "translated_languages" | "image" | "cover_image" | "products_count" | "born" | "death" | "languages" | "quote">>;
export declare class CreateAuthorDto extends CreateAuthorDto_base {
    shop_id?: string;
}
export {};
