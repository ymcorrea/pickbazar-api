"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCouponsOrderByColumn = exports.GetCouponsDto = exports.CouponPaginator = exports.VerifyCouponResponse = exports.VerifyCouponInput = exports.UpdateCouponDto = exports.CreateCouponDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
const coupon_entity_1 = require("../entities/coupon.entity");
class CreateCouponDto extends (0, swagger_1.PickType)(coupon_entity_1.Coupon, [
    "code",
    "type",
    "amount",
    "description",
    "expire_at",
    "active_from",
    "language",
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateCouponDto = CreateCouponDto;
class UpdateCouponDto extends (0, swagger_1.PartialType)(CreateCouponDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCouponDto = UpdateCouponDto;
class VerifyCouponInput {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String } };
    }
}
exports.VerifyCouponInput = VerifyCouponInput;
class VerifyCouponResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { is_valid: { required: true, type: () => Boolean }, coupon: { required: true, type: () => require("../entities/coupon.entity").Coupon } };
    }
}
exports.VerifyCouponResponse = VerifyCouponResponse;
class CouponPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/coupon.entity").Coupon] } };
    }
}
exports.CouponPaginator = CouponPaginator;
class GetCouponsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./coupon.dto").QueryCouponsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, language: { required: false, type: () => String } };
    }
}
exports.GetCouponsDto = GetCouponsDto;
var QueryCouponsOrderByColumn;
(function (QueryCouponsOrderByColumn) {
    QueryCouponsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryCouponsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryCouponsOrderByColumn["CODE"] = "CODE";
    QueryCouponsOrderByColumn["AMOUNT"] = "AMOUNT";
    QueryCouponsOrderByColumn["EXPIRE_AT"] = "EXPIRE_AT";
})(QueryCouponsOrderByColumn = exports.QueryCouponsOrderByColumn || (exports.QueryCouponsOrderByColumn = {}));
//# sourceMappingURL=coupon.dto.js.map