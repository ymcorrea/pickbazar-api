import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Shipping extends CoreEntity {
  @Column()
  name: string;
  @Column()
  amount: number;
  @Column()
  is_global: boolean;
  @Column()
  type: ShippingType;
}

export enum ShippingType {
  FIXED = "fixed",
  PERCENTAGE = "percentage",
  FREE = "free",
}
