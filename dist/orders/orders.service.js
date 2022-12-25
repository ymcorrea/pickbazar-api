"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const orders_json_1 = __importDefault(require("../db/pickbazar/orders.json"));
const order_statuses_json_1 = __importDefault(require("../db/pickbazar/order-statuses.json"));
const order_export_json_1 = __importDefault(require("../db/pickbazar/order-export.json"));
const order_invoice_json_1 = __importDefault(require("../db/pickbazar/order-invoice.json"));
const order_files_json_1 = __importDefault(require("../db/pickbazar/order-files.json"));
const class_transformer_1 = require("class-transformer");
const order_entity_1 = require("./entities/order.entity");
const order_status_entity_1 = require("./entities/order-status.entity");
const paginate_1 = require("../common/pagination/paginate");
const fuse_js_1 = __importDefault(require("fuse.js"));
const orders = (0, class_transformer_1.plainToClass)(order_entity_1.Order, orders_json_1.default);
const orderStatus = (0, class_transformer_1.plainToClass)(order_status_entity_1.OrderStatus, order_statuses_json_1.default);
const options = {
    keys: ['name'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(orderStatus, options);
const orderFiles = (0, class_transformer_1.plainToClass)(order_entity_1.OrderFiles, order_files_json_1.default);
let OrdersService = class OrdersService {
    constructor() {
        this.orders = orders;
        this.orderStatus = orderStatus;
        this.orderFiles = orderFiles;
    }
    create(createOrderInput) {
        return this.orders[0];
    }
    getOrders({ limit, page, customer_id, tracking_number, search, shop_id, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 15;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.orders;
        if (shop_id && shop_id !== 'undefined') {
            data = (_a = this.orders) === null || _a === void 0 ? void 0 : _a.filter((p) => { var _a; return ((_a = p === null || p === void 0 ? void 0 : p.shop) === null || _a === void 0 ? void 0 : _a.id) === Number(shop_id); });
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/orders?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getOrderById(id) {
        return this.orders.find((p) => p.id === Number(id) || p.tracking_number === id);
    }
    getOrderByTrackingNumber(tracking_number) {
        console.log('t', tracking_number);
        const parentOrder = this.orders.find((p) => p.tracking_number === tracking_number);
        if (!parentOrder) {
            return this.orders[0];
        }
        return parentOrder;
    }
    getOrderStatuses({ limit, page, search, orderBy, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.orderStatus;
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/order-status?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getOrderStatus(param, language) {
        return this.orderStatus.find((p) => p.slug === param);
    }
    update(id, updateOrderInput) {
        return this.orders[0];
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
    verifyCheckout(input) {
        return {
            total_tax: 0,
            shipping_charge: 0,
            unavailable_products: [],
            wallet_currency: 0,
            wallet_amount: 0,
        };
    }
    createOrderStatus(createOrderStatusInput) {
        return this.orderStatus[0];
    }
    updateOrderStatus(updateOrderStatusInput) {
        return this.orderStatus[0];
    }
    async getOrderFileItems({ page, limit }) {
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = orderFiles.slice(startIndex, endIndex);
        const url = `/downloads?&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(orderFiles.length, page, limit, results.length, url));
    }
    async getDigitalFileDownloadUrl(digitalFileId) {
        const item = this.orderFiles.find((singleItem) => singleItem.digital_file_id === digitalFileId);
        return item.file.url;
    }
    async exportOrder(shop_id) {
        return order_export_json_1.default.url;
    }
    async downloadInvoiceUrl(shop_id) {
        return order_invoice_json_1.default[0].url;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map