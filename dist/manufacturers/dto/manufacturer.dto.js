"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTopManufacturersDto = exports.UpdateManufacturerDto = exports.CreateManufacturerDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const manufacturer_entity_1 = require("../entities/manufacturer.entity");
class CreateManufacturerDto extends (0, swagger_1.OmitType)(manufacturer_entity_1.Manufacturer, [
    "id",
    "cover_image",
    "description",
    "image",
    "name",
    "products_count",
    "slug",
    "socials",
    "type",
    "type_id",
    "website",
    "translated_languages",
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { shop_id: { required: false, type: () => String } };
    }
}
exports.CreateManufacturerDto = CreateManufacturerDto;
class UpdateManufacturerDto extends (0, swagger_1.PartialType)(CreateManufacturerDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateManufacturerDto = UpdateManufacturerDto;
class GetTopManufacturersDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Number } };
    }
}
exports.GetTopManufacturersDto = GetTopManufacturersDto;
//# sourceMappingURL=manufacturer.dto.js.map