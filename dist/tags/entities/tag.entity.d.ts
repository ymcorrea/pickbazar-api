import { CoreEntity } from "src/common/entities/core.entity";
export declare class Tag extends CoreEntity {
    name: string;
    slug: string;
    parent: number;
    details: string;
    icon: string;
    language: string;
    translated_languages: string[];
}
