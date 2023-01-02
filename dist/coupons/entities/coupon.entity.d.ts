import { CoreEntity } from "src/common/entities/core.entity";
export declare enum CouponType {
    FIXED_COUPON = "fixed",
    PERCENTAGE_COUPON = "percentage",
    FREE_SHIPPING_COUPON = "free_shipping",
    DEFAULT_COUPON = "fixed"
}
export declare class Coupon extends CoreEntity {
    code: string;
    description?: string;
    type: CouponType;
    is_valid: boolean;
    amount: number;
    active_from: string;
    expire_at: string;
    language: string;
}
