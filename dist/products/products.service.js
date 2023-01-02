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
exports.ProductsService = void 0;
const products_json_1 = __importDefault(require("../db/pickbazar/products.json"));
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const product_entity_1 = require("./entities/product.entity");
const products = (0, class_transformer_1.plainToClass)(product_entity_1.Product, products_json_1.default);
const options = {
    keys: [
        "name",
        "type.slug",
        "categories.slug",
        "status",
        "author.slug",
        "tags",
        "manufacturer.slug",
    ],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(products, options);
let ProductsService = class ProductsService {
    constructor() {
        this.products = products;
    }
    create(createProductDto) {
        return this.products[0];
    }
    getProducts({ limit, page, search }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.products;
        if (search) {
            const parseSearchParams = search.split(";");
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(":");
                if (key !== "slug") {
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
        const url = `/products?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getProductBySlug(slug) {
        const product = this.products.find((p) => p.slug === slug);
        const related_products = this.products
            .filter((p) => p.type.slug === product.type.slug)
            .slice(0, 20);
        return Object.assign(Object.assign({}, product), { related_products });
    }
    getPopularProducts({ limit, type_slug }) {
        var _a;
        let data = this.products;
        if (type_slug) {
            data = (_a = fuse.search(type_slug)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        return data === null || data === void 0 ? void 0 : data.slice(0, limit);
    }
    update(id, updateProductDto) {
        return this.products[0];
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map