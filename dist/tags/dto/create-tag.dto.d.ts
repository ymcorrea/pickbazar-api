import { Tag } from '../entities/tag.entity';
declare const CreateTagDto_base: import("@nestjs/common").Type<Pick<Tag, "name" | "type" | "language" | "details" | "icon" | "image">>;
export declare class CreateTagDto extends CreateTagDto_base {
}
export {};
