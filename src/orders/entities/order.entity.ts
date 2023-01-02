import { CoreEntity } from "src/common/entities/core.entity";
import { File, Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

export enum PaymentGatewayType {
  STRIPE = "stripe",
  CASH_ON_DELIVERY = "cod",
}

@Entity()
export class Order extends CoreEntity {
  @Column()
  tracking_number: string;

  @Column()
  customer_id: number;

  @Column()
  customer_contact: string;
  // parent_order?: Order;
  // children: Order[];
  // status: OrderStatus;

  @Column()
  amount: number;

  @Column()
  sales_tax: number;

  @Column()
  total: number;

  @Column()
  paid_total: number;

  @Column()
  payment_id?: string;

  @Column()
  payment_gateway: PaymentGatewayType;
  // coupon?: Coupon;

  @Column()
  discount?: number;

  @Column()
  delivery_fee: number;

  @Column()
  delivery_time: string;
  // products: Product[];
  // billing_address: UserAddress;
  // shipping_address: UserAddress;

  @Column()
  language: string;

  // @Column()
  // translated_languages: string[];

  @ManyToOne(() => User, (usr) => usr.orders, {
    eager: true,
  })
  customer: User;
}

export class OrderFiles extends CoreEntity {
  purchase_key: string;
  digital_file_id: number;
  order_id?: number;
  customer_id: number;
  file: File;
  fileable: Product;
}
