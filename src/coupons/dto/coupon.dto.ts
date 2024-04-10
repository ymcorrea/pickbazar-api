import { PartialType, PickType } from "@nestjs/swagger";
import { SortOrder } from "src/common/dto/generic-conditions.dto";
import { PaginationArgs } from "src/common/dto/pagination-args.dto";
import { Paginator } from "src/common/dto/paginator.dto";
import { Coupon } from "../entities/coupon.entity";

export class CreateCouponDto extends PickType(Coupon, [
  "code",
  "type",
  "amount",
  "description",
  // "image",
  "expire_at",
  "active_from",
  "language",
]) {}
 
export class UpdateCouponDto extends PartialType(CreateCouponDto) {}

export class VerifyCouponInput {
  code: string;
}
export class VerifyCouponResponse {
  is_valid: boolean;
  coupon: Coupon;
}

export class CouponPaginator extends Paginator<Coupon> {
  data: Coupon[];
}

export class GetCouponsDto extends PaginationArgs {
  orderBy?: QueryCouponsOrderByColumn;
  sortedBy?: SortOrder;
  search?: string;
  language?: string;
}

export enum QueryCouponsOrderByColumn {
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  CODE = "CODE",
  AMOUNT = "AMOUNT",
  EXPIRE_AT = "EXPIRE_AT",
}
