import { Tag } from '../entities/tag.entity';
declare const CreateTagDto_base: import("@nestjs/common").Type<Pick<Tag, "name" | "language" | "type" | "image" | "details" | "icon">>;
export declare class CreateTagDto extends CreateTagDto_base {
}
export {};
