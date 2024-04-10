import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

export enum CouponType {
  FIXED_COUPON = "fixed",
  PERCENTAGE_COUPON = "percentage",
  FREE_SHIPPING_COUPON = "free_shipping",
  DEFAULT_COUPON = "fixed",
}

@Entity()
export class Coupon extends CoreEntity {
  @Column()
  code: string;

  @Column()
  description?: string;

  // orders?: Order[];
 
  @Column()
  type: CouponType;

  // image: Attachment;

  @Column()
  is_valid: boolean;

  @Column()
  amount: number;

  @Column()
  active_from: string;

  @Column()
  expire_at: string;

  @Column()
  language: string;

  // @Column()
  // translated_languages: string[];
}
