import { Attachment } from "src/common/entities/attachment.entity";
import { CoreEntity } from "src/common/entities/core.entity";
export declare class Setting extends CoreEntity {
    options: SettingsOptions;
    language: string;
    translated_languages: string[];
}
export declare class SettingsOptions {
    siteTitle: string;
    siteSubtitle: string;
    currency: string;
    minimumOrderAmount: number;
    walletToCurrencyRatio: number;
    signupPoints: number;
    deliveryTime: DeliveryTime[];
    logo: Attachment;
    taxClass: string;
    shippingClass: string;
    seo: SeoSettings;
    google?: GoogleSettings;
    facebook?: FacebookSettings;
    contactDetails: ContactDetails;
    maximumQuestionLimit: number;
}
export declare class DeliveryTime {
    title: string;
    description: string;
}
export declare class SeoSettings {
    metaTitle?: string;
    metaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: Attachment;
    twitterHandle?: string;
    twitterCardType?: string;
    metaTags?: string;
    canonicalUrl?: string;
}
export declare class GoogleSettings {
    isEnable: boolean;
    tagManagerId: string;
}
export declare class FacebookSettings {
    isEnable: boolean;
    appId: string;
    pageId: string;
}
export declare class ContactDetails {
    socials: ShopSocials[];
    contact: string;
    location: Location;
    website: string;
}
export declare class ShopSocials {
    icon: string;
    url: string;
}
export declare class Location {
    lat: number;
    lng: number;
    city?: string;
    state: string;
    country: string;
    zip?: string;
    formattedAddress: string;
}
