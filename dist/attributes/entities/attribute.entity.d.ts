import { CoreEntity } from "src/common/entities/core.entity";
import { AttributeValue } from "./attribute-value.entity";
export declare class Attribute extends CoreEntity {
    name: string;
    shop_id: string;
    slug: string;
    values: AttributeValue[];
    language: string;
    translated_languages: string[];
}
