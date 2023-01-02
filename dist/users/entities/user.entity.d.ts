import { CoreEntity } from "src/common/entities/core.entity";
import { Order } from "src/orders/entities/order.entity";
import { Profile } from "./profile.entity";
export declare class User extends CoreEntity {
    name: string;
    email: string;
    password: string;
    salt: string;
    is_active: boolean;
    orders: Order[];
    profile: Profile;
}
