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
exports.Feedback = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
const typeorm_1 = require("typeorm");
let Feedback = class Feedback extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => String }, model_type: { required: true, type: () => String }, model_id: { required: true, type: () => String }, positive: { required: false, type: () => Boolean }, negative: { required: false, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Feedback.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Feedback.prototype, "model_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Feedback.prototype, "model_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Feedback.prototype, "positive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Feedback.prototype, "negative", void 0);
Feedback = __decorate([
    (0, typeorm_1.Entity)()
], Feedback);
exports.Feedback = Feedback;
//# sourceMappingURL=feedback.entity.js.map