"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShippingDto = exports.CreateShippingDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const shipping_entity_1 = require("../entities/shipping.entity");
class CreateShippingDto extends (0, swagger_1.PickType)(shipping_entity_1.Shipping, [
    "name",
    "amount",
    "is_global",
    "type",
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateShippingDto = CreateShippingDto;
class UpdateShippingDto extends (0, swagger_1.PartialType)(CreateShippingDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateShippingDto = UpdateShippingDto;
//# sourceMappingURL=shipping.dto.js.map