import { SortOrder } from "src/common/dto/generic-conditions.dto";
import { PaginationArgs } from "src/common/dto/pagination-args.dto";
import { Paginator } from "src/common/dto/paginator.dto";
import { Coupon } from "../entities/coupon.entity";
declare const CreateCouponDto_base: import("@nestjs/common").Type<Pick<Coupon, "code" | "type" | "amount" | "description" | "expire_at" | "active_from" | "language">>;
export declare class CreateCouponDto extends CreateCouponDto_base {
}
declare const UpdateCouponDto_base: import("@nestjs/common").Type<Partial<CreateCouponDto>>;
export declare class UpdateCouponDto extends UpdateCouponDto_base {
}
export declare class VerifyCouponInput {
    code: string;
}
export declare class VerifyCouponResponse {
    is_valid: boolean;
    coupon: Coupon;
}
export declare class CouponPaginator extends Paginator<Coupon> {
    data: Coupon[];
}
export declare class GetCouponsDto extends PaginationArgs {
    orderBy?: QueryCouponsOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
    language?: string;
}
export declare enum QueryCouponsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    CODE = "CODE",
    AMOUNT = "AMOUNT",
    EXPIRE_AT = "EXPIRE_AT"
}
export {};
