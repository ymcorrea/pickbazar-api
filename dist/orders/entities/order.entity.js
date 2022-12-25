"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFiles = exports.Order = exports.PaymentGatewayType = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
var PaymentGatewayType;
(function (PaymentGatewayType) {
    PaymentGatewayType["STRIPE"] = "stripe";
    PaymentGatewayType["CASH_ON_DELIVERY"] = "cod";
})(PaymentGatewayType = exports.PaymentGatewayType || (exports.PaymentGatewayType = {}));
class Order extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { tracking_number: { required: true, type: () => String }, customer_id: { required: true, type: () => Number }, customer_contact: { required: true, type: () => String }, customer: { required: true, type: () => require("../../users/entities/user.entity").User }, parent_order: { required: false, type: () => require("./order.entity").Order }, children: { required: true, type: () => [require("./order.entity").Order] }, status: { required: true, type: () => require("./order-status.entity").OrderStatus }, amount: { required: true, type: () => Number }, sales_tax: { required: true, type: () => Number }, total: { required: true, type: () => Number }, paid_total: { required: true, type: () => Number }, payment_id: { required: false, type: () => String }, payment_gateway: { required: true, enum: require("./order.entity").PaymentGatewayType }, coupon: { required: false, type: () => require("../../coupons/entities/coupon.entity").Coupon }, shop: { required: true, type: () => require("../../shops/entities/shop.entity").Shop }, discount: { required: false, type: () => Number }, delivery_fee: { required: true, type: () => Number }, delivery_time: { required: true, type: () => String }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] }, billing_address: { required: true, type: () => require("../../addresses/entities/address.entity").UserAddress }, shipping_address: { required: true, type: () => require("../../addresses/entities/address.entity").UserAddress }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] } };
    }
}
exports.Order = Order;
class OrderFiles extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { purchase_key: { required: true, type: () => String }, digital_file_id: { required: true, type: () => Number }, order_id: { required: false, type: () => Number }, customer_id: { required: true, type: () => Number }, file: { required: true, type: () => require("../../products/entities/product.entity").File }, fileable: { required: true, type: () => require("../../products/entities/product.entity").Product } };
    }
}
exports.OrderFiles = OrderFiles;
//# sourceMappingURL=order.entity.js.map