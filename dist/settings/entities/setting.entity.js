"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = exports.ShopSocials = exports.ContactDetails = exports.FacebookSettings = exports.GoogleSettings = exports.SeoSettings = exports.DeliveryTime = exports.SettingsOptions = exports.Setting = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Setting extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { options: { required: true, type: () => require("./setting.entity").SettingsOptions }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] } };
    }
}
exports.Setting = Setting;
class SettingsOptions {
    static _OPENAPI_METADATA_FACTORY() {
        return { siteTitle: { required: true, type: () => String }, siteSubtitle: { required: true, type: () => String }, currency: { required: true, type: () => String }, minimumOrderAmount: { required: true, type: () => Number }, walletToCurrencyRatio: { required: true, type: () => Number }, signupPoints: { required: true, type: () => Number }, deliveryTime: { required: true, type: () => [require("./setting.entity").DeliveryTime] }, logo: { required: true, type: () => require("../../common/entities/attachment.entity").Attachment }, taxClass: { required: true, type: () => String }, shippingClass: { required: true, type: () => String }, seo: { required: true, type: () => require("./setting.entity").SeoSettings }, google: { required: false, type: () => require("./setting.entity").GoogleSettings }, facebook: { required: false, type: () => require("./setting.entity").FacebookSettings }, contactDetails: { required: true, type: () => require("./setting.entity").ContactDetails }, maximumQuestionLimit: { required: true, type: () => Number } };
    }
}
exports.SettingsOptions = SettingsOptions;
class DeliveryTime {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, description: { required: true, type: () => String } };
    }
}
exports.DeliveryTime = DeliveryTime;
class SeoSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { metaTitle: { required: false, type: () => String }, metaDescription: { required: false, type: () => String }, ogTitle: { required: false, type: () => String }, ogDescription: { required: false, type: () => String }, ogImage: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, twitterHandle: { required: false, type: () => String }, twitterCardType: { required: false, type: () => String }, metaTags: { required: false, type: () => String }, canonicalUrl: { required: false, type: () => String } };
    }
}
exports.SeoSettings = SeoSettings;
class GoogleSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { isEnable: { required: true, type: () => Boolean }, tagManagerId: { required: true, type: () => String } };
    }
}
exports.GoogleSettings = GoogleSettings;
class FacebookSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { isEnable: { required: true, type: () => Boolean }, appId: { required: true, type: () => String }, pageId: { required: true, type: () => String } };
    }
}
exports.FacebookSettings = FacebookSettings;
class ContactDetails {
    static _OPENAPI_METADATA_FACTORY() {
        return { socials: { required: true, type: () => [require("./setting.entity").ShopSocials] }, contact: { required: true, type: () => String }, location: { required: true, type: () => require("./setting.entity").Location }, website: { required: true, type: () => String } };
    }
}
exports.ContactDetails = ContactDetails;
class ShopSocials {
    static _OPENAPI_METADATA_FACTORY() {
        return { icon: { required: true, type: () => String }, url: { required: true, type: () => String } };
    }
}
exports.ShopSocials = ShopSocials;
class Location {
    static _OPENAPI_METADATA_FACTORY() {
        return { lat: { required: true, type: () => Number }, lng: { required: true, type: () => Number }, city: { required: false, type: () => String }, state: { required: true, type: () => String }, country: { required: true, type: () => String }, zip: { required: false, type: () => String }, formattedAddress: { required: true, type: () => String } };
    }
}
exports.Location = Location;
//# sourceMappingURL=setting.entity.js.map