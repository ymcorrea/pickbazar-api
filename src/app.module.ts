import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressesModule } from "./addresses/addresses.module";
import { AnalyticsModule } from "./analytics/analytics.module";
import { AttributesModule } from "./attributes/attributes.module";
import { AuthModule } from "./auth/auth.module";
import { AuthorsModule } from "./authors/authors.module";
import { CategoriesModule } from "./categories/categories.module";
import { CommonModule } from "./common/common.module";
import { DatabaseConfig } from "./config/typeorm.config";
import { CouponsModule } from "./coupons/coupons.module";
import { FeedbackModule } from "./feedbacks/feedbacks.module";
import { ImportsModule } from "./imports/imports.module";
import { ManufacturersModule } from "./manufacturers/manufacturers.module";
import { NewslettersModule } from "./newsletters/newsletters.module";
import { OrdersModule } from "./orders/orders.module";
import { ProductsModule } from "./products/products.module";
import { QuestionModule } from "./questions/questions.module";
import { RefundsModule } from "./refunds/refunds.module";
import { ReportsModule } from "./reports/reports.module";
import { ReviewModule } from "./reviews/reviews.module";
import { SettingsModule } from "./settings/settings.module";
import { ShippingsModule } from "./shippings/shippings.module";
import { TagsModule } from "./tags/tags.module";
import { TaxesModule } from "./taxes/taxes.module";
import { TypesModule } from "./types/types.module";
import { UploadsModule } from "./uploads/uploads.module";
import { UsersModule } from "./users/users.module";
import { WishlistsModule } from "./wishlists/wishlists.module";
import { WithdrawsModule } from "./withdraws/withdraws.module";
 
@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),
    UsersModule,
    CommonModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
    AnalyticsModule,
    AttributesModule,
    ShippingsModule,
    TaxesModule,
    TagsModule,
    TypesModule,
    WithdrawsModule,
    UploadsModule,
    SettingsModule,
    CouponsModule,
    AddressesModule,
    ImportsModule,
    AuthModule,
    RefundsModule,
    AuthorsModule,
    ManufacturersModule,
    NewslettersModule,
    ReviewModule,
    QuestionModule,
    WishlistsModule,
    ReportsModule,
    FeedbackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
