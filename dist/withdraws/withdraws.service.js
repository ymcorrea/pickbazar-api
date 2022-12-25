"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawsService = void 0;
const common_1 = require("@nestjs/common");
const paginate_1 = require("../common/pagination/paginate");
let WithdrawsService = class WithdrawsService {
    constructor() {
        this.withdraws = [];
    }
    create(createWithdrawDto) {
        return Object.assign({ id: this.withdraws.length + 1 }, createWithdrawDto);
    }
    getWithdraws({ limit, page, status, shop_id, }) {
        if (!page)
            page = 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.withdraws;
        if (shop_id) {
            data = this.withdraws.filter((p) => p.shop_id === shop_id);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/withdraws?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    findOne(id) {
        return `This action returns a #${id} withdraw`;
    }
    update(id, updateWithdrawDto) {
        return this.withdraws[0];
    }
    remove(id) {
        return `This action removes a #${id} withdraw`;
    }
};
WithdrawsService = __decorate([
    (0, common_1.Injectable)()
], WithdrawsService);
exports.WithdrawsService = WithdrawsService;
//# sourceMappingURL=withdraws.service.js.map