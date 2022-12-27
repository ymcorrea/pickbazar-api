import { CoreEntity } from "src/common/entities/core.entity";
// import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity } from "typeorm";

@Entity()
export class User extends CoreEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column()
  salt: string;

  // @Column()
  // shop_id?: number;

  // @Column()
  // profile?: Profile;

  // @Column()
  // shops?: Shop[];

  // @Column()
  // managed_shop?: Shop;

  // @Column()
  // is_active?: boolean = true;

  // @Column()
  // address?: Address[];
  // orders?: Order[];
}
