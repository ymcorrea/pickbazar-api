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
exports.Attachment = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("./core.entity");
const typeorm_1 = require("typeorm");
let Attachment = class Attachment extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { thumbnail: { required: false, type: () => String }, original: { required: false, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attachment.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attachment.prototype, "original", void 0);
Attachment = __decorate([
    (0, typeorm_1.Entity)()
], Attachment);
exports.Attachment = Attachment;
//# sourceMappingURL=attachment.entity.js.map