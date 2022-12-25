import { Address } from 'src/addresses/entities/address.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Profile } from './profile.entity';
export declare class User extends CoreEntity {
    name: string;
    email: string;
    password?: string;
    shop_id?: number;
    profile?: Profile;
    shops?: Shop[];
    managed_shop?: Shop;
    is_active?: boolean;
    address?: Address[];
}
