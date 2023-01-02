"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCouponDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const coupon_entity_1 = require("../entities/coupon.entity");
class CreateCouponDto extends (0, swagger_1.PickType)(coupon_entity_1.Coupon, [
    "code",
    "type",
    "amount",
    "description",
    "image",
    "expire_at",
    "active_from",
    "language",
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateCouponDto = CreateCouponDto;
//# sourceMappingURL=create-coupon.dto.js.map