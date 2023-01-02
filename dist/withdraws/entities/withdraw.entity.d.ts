import { CoreEntity } from "src/common/entities/core.entity";
export declare class Withdraw extends CoreEntity {
    amount: number;
    status: WithdrawStatus;
    shop_id: number;
    payment_method: string;
    details: string;
    note: string;
}
export declare enum WithdrawStatus {
    APPROVED = "Approved",
    PENDING = "Pending",
    ON_HOLD = "On hold",
    REJECTED = "Rejected",
    PROCESSING = "Processing"
}
