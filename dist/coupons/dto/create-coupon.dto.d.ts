import { Coupon } from "../entities/coupon.entity";
declare const CreateCouponDto_base: import("@nestjs/common").Type<Pick<Coupon, "code" | "type" | "amount" | "description" | "image" | "expire_at" | "active_from" | "language">>;
export declare class CreateCouponDto extends CreateCouponDto_base {
}
export {};
