import { CoreEntity } from "src/common/entities/core.entity";
export declare class User extends CoreEntity {
    name: string;
    email: string;
    password?: string;
    salt: string;
}
