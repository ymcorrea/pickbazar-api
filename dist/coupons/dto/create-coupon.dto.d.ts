import { Coupon } from '../entities/coupon.entity';
declare const CreateCouponDto_base: import("@nestjs/common").Type<Pick<Coupon, "amount" | "language" | "type" | "image" | "code" | "description" | "expire_at" | "active_from">>;
export declare class CreateCouponDto extends CreateCouponDto_base {
}
export {};
