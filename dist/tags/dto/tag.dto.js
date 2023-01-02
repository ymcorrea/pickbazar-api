"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagDto = exports.CreateTagDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const tag_entity_1 = require("../entities/tag.entity");
class CreateTagDto extends (0, swagger_1.PickType)(tag_entity_1.Tag, [
    "name",
    "details",
    "icon",
    "language",
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateTagDto = CreateTagDto;
class UpdateTagDto extends (0, swagger_1.PartialType)(CreateTagDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateTagDto = UpdateTagDto;
//# sourceMappingURL=tag.dto.js.map