"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressDto = exports.CreateAddressDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const address_entity_1 = require("../entities/address.entity");
class CreateAddressDto extends (0, swagger_1.PickType)(address_entity_1.Address, [
    "title",
    "type",
    "default",
    "address",
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { "customer_id": { required: true, type: () => Number } };
    }
}
exports.CreateAddressDto = CreateAddressDto;
class UpdateAddressDto extends (0, swagger_1.PartialType)(CreateAddressDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateAddressDto = UpdateAddressDto;
//# sourceMappingURL=address.dto.js.map