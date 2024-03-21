import { CoreEntity } from "src/common/entities/core.entity";
import { Order } from "src/orders/entities/order.entity";
// import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User extends CoreEntity {
  @Column()
  name: string;
 
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ default: true })
  is_active: boolean;

  // @Column()
  // address?: Address[];

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}
