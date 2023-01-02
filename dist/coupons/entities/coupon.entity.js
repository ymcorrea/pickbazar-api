"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = exports.CouponType = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
const typeorm_1 = require("typeorm");
var CouponType;
(function (CouponType) {
    CouponType["FIXED_COUPON"] = "fixed";
    CouponType["PERCENTAGE_COUPON"] = "percentage";
    CouponType["FREE_SHIPPING_COUPON"] = "free_shipping";
    CouponType["DEFAULT_COUPON"] = "fixed";
})(CouponType = exports.CouponType || (exports.CouponType = {}));
let Coupon = class Coupon extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String }, description: { required: false, type: () => String }, type: { required: true, enum: require("./coupon.entity").CouponType }, is_valid: { required: true, type: () => Boolean }, amount: { required: true, type: () => Number }, active_from: { required: true, type: () => String }, expire_at: { required: true, type: () => String }, language: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Coupon.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Coupon.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Coupon.prototype, "is_valid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Coupon.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Coupon.prototype, "active_from", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Coupon.prototype, "expire_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Coupon.prototype, "language", void 0);
Coupon = __decorate([
    (0, typeorm_1.Entity)()
], Coupon);
exports.Coupon = Coupon;
//# sourceMappingURL=coupon.entity.js.map