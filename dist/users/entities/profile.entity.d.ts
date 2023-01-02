import { CoreEntity } from "src/common/entities/core.entity";
import { User } from "./user.entity";
export declare class Profile extends CoreEntity {
    bio?: string;
    contact?: string;
    user: User;
}
export declare class Social extends CoreEntity {
    type: string;
    link: string;
}
