import { CoreEntity } from "src/common/entities/core.entity";
import { File, Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
export declare enum PaymentGatewayType {
    STRIPE = "stripe",
    CASH_ON_DELIVERY = "cod"
}
export declare class Order extends CoreEntity {
    tracking_number: string;
    customer_id: number;
    customer_contact: string;
    amount: number;
    sales_tax: number;
    total: number;
    paid_total: number;
    payment_id?: string;
    payment_gateway: PaymentGatewayType;
    discount?: number;
    delivery_fee: number;
    delivery_time: string;
    language: string;
    customer: User;
}
export declare class OrderFiles extends CoreEntity {
    purchase_key: string;
    digital_file_id: number;
    order_id?: number;
    customer_id: number;
    file: File;
    fileable: Product;
}
