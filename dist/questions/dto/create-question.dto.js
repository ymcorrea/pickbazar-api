"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionDto = exports.CreateQuestionDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const question_entity_1 = require("../entities/question.entity");
class CreateQuestionDto extends (0, swagger_1.OmitType)(question_entity_1.Question, [
    "id",
    "product",
    "user",
    "created_at",
    "updated_at",
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateQuestionDto = CreateQuestionDto;
class UpdateQuestionDto extends (0, swagger_1.PartialType)(CreateQuestionDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateQuestionDto = UpdateQuestionDto;
//# sourceMappingURL=create-question.dto.js.map