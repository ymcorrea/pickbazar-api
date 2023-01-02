import { Tag } from "../entities/tag.entity";
declare const CreateTagDto_base: import("@nestjs/common").Type<Pick<Tag, "name" | "type" | "details" | "image" | "icon" | "language">>;
export declare class CreateTagDto extends CreateTagDto_base {
}
export {};
