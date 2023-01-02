import { Author } from '../entities/author.entity';
declare const CreateAuthorDto_base: import("@nestjs/common").Type<Omit<Author, "translated_languages" | "id" | "bio" | "born" | "cover_image" | "death" | "image" | "languages" | "name" | "products_count" | "quote" | "slug" | "socials">>;
export declare class CreateAuthorDto extends CreateAuthorDto_base {
    shop_id?: string;
}
export {};
