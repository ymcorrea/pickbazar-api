import { Tag } from "../entities/tag.entity";
declare const CreateTagDto_base: import("@nestjs/common").Type<Pick<Tag, "name" | "details" | "icon" | "language">>;
export declare class CreateTagDto extends CreateTagDto_base {
}
declare const UpdateTagDto_base: import("@nestjs/common").Type<Partial<CreateTagDto>>;
export declare class UpdateTagDto extends UpdateTagDto_base {
}
export {};
