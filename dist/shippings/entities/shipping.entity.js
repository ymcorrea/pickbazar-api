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
exports.ShippingType = exports.Shipping = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
const typeorm_1 = require("typeorm");
let Shipping = class Shipping extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, amount: { required: true, type: () => Number }, is_global: { required: true, type: () => Boolean }, type: { required: true, enum: require("./shipping.entity").ShippingType } };
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Shipping.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Shipping.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Shipping.prototype, "is_global", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Shipping.prototype, "type", void 0);
Shipping = __decorate([
    (0, typeorm_1.Entity)()
], Shipping);
exports.Shipping = Shipping;
var ShippingType;
(function (ShippingType) {
    ShippingType["FIXED"] = "fixed";
    ShippingType["PERCENTAGE"] = "percentage";
    ShippingType["FREE"] = "free";
})(ShippingType = exports.ShippingType || (exports.ShippingType = {}));
//# sourceMappingURL=shipping.entity.js.map