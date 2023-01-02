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
exports.OrderFiles = exports.Order = exports.PaymentGatewayType = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
var PaymentGatewayType;
(function (PaymentGatewayType) {
    PaymentGatewayType["STRIPE"] = "stripe";
    PaymentGatewayType["CASH_ON_DELIVERY"] = "cod";
})(PaymentGatewayType = exports.PaymentGatewayType || (exports.PaymentGatewayType = {}));
let Order = class Order extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { tracking_number: { required: true, type: () => String }, customer_id: { required: true, type: () => Number }, customer_contact: { required: true, type: () => String }, amount: { required: true, type: () => Number }, sales_tax: { required: true, type: () => Number }, total: { required: true, type: () => Number }, paid_total: { required: true, type: () => Number }, payment_id: { required: false, type: () => String }, payment_gateway: { required: true, enum: require("./order.entity").PaymentGatewayType }, discount: { required: false, type: () => Number }, delivery_fee: { required: true, type: () => Number }, delivery_time: { required: true, type: () => String }, language: { required: true, type: () => String }, customer: { required: true, type: () => require("../../users/entities/user.entity").User } };
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "tracking_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "customer_contact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "sales_tax", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "paid_total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "payment_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "payment_gateway", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "delivery_fee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "delivery_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (usr) => usr.orders, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "customer", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
class OrderFiles extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { purchase_key: { required: true, type: () => String }, digital_file_id: { required: true, type: () => Number }, order_id: { required: false, type: () => Number }, customer_id: { required: true, type: () => Number }, file: { required: true, type: () => require("../../products/entities/product.entity").File }, fileable: { required: true, type: () => require("../../products/entities/product.entity").Product } };
    }
}
exports.OrderFiles = OrderFiles;
//# sourceMappingURL=order.entity.js.map