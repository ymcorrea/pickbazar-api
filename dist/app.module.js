"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const common_module_1 = require("./common/common.module");
const products_module_1 = require("./products/products.module");
const orders_module_1 = require("./orders/orders.module");
const categories_module_1 = require("./categories/categories.module");
const analytics_module_1 = require("./analytics/analytics.module");
const attributes_module_1 = require("./attributes/attributes.module");
const shippings_module_1 = require("./shippings/shippings.module");
const taxes_module_1 = require("./taxes/taxes.module");
const tags_module_1 = require("./tags/tags.module");
const shops_module_1 = require("./shops/shops.module");
const types_module_1 = require("./types/types.module");
const withdraws_module_1 = require("./withdraws/withdraws.module");
const uploads_module_1 = require("./uploads/uploads.module");
const settings_module_1 = require("./settings/settings.module");
const coupons_module_1 = require("./coupons/coupons.module");
const addresses_module_1 = require("./addresses/addresses.module");
const imports_module_1 = require("./imports/imports.module");
const auth_module_1 = require("./auth/auth.module");
const refunds_module_1 = require("./refunds/refunds.module");
const authors_module_1 = require("./authors/authors.module");
const manufacturers_module_1 = require("./manufacturers/manufacturers.module");
const newsletters_module_1 = require("./newsletters/newsletters.module");
const reviews_module_1 = require("./reviews/reviews.module");
const questions_module_1 = require("./questions/questions.module");
const wishlists_module_1 = require("./wishlists/wishlists.module");
const reports_module_1 = require("./reports/reports.module");
const feedbacks_module_1 = require("./feedbacks/feedbacks.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            products_module_1.ProductsModule,
            orders_module_1.OrdersModule,
            categories_module_1.CategoriesModule,
            analytics_module_1.AnalyticsModule,
            attributes_module_1.AttributesModule,
            shippings_module_1.ShippingsModule,
            taxes_module_1.TaxesModule,
            tags_module_1.TagsModule,
            shops_module_1.ShopsModule,
            types_module_1.TypesModule,
            withdraws_module_1.WithdrawsModule,
            uploads_module_1.UploadsModule,
            settings_module_1.SettingsModule,
            coupons_module_1.CouponsModule,
            addresses_module_1.AddressesModule,
            imports_module_1.ImportsModule,
            auth_module_1.AuthModule,
            refunds_module_1.RefundsModule,
            authors_module_1.AuthorsModule,
            manufacturers_module_1.ManufacturersModule,
            newsletters_module_1.NewslettersModule,
            reviews_module_1.ReviewModule,
            questions_module_1.QuestionModule,
            wishlists_module_1.WishlistsModule,
            reports_module_1.ReportsModule,
            feedbacks_module_1.FeedbackModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map