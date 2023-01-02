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
exports.Social = exports.Profile = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Profile = class Profile extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { bio: { required: false, type: () => String }, contact: { required: false, type: () => String }, user: { required: true, type: () => require("./user.entity").User } };
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profile.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profile.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_entity_1.User, (user) => user.profile),
    __metadata("design:type", user_entity_1.User)
], Profile.prototype, "user", void 0);
Profile = __decorate([
    (0, typeorm_1.Entity)()
], Profile);
exports.Profile = Profile;
class Social extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => String }, link: { required: true, type: () => String } };
    }
}
exports.Social = Social;
//# sourceMappingURL=profile.entity.js.map