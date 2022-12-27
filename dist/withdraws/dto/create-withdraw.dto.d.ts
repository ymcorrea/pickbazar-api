import { Withdraw } from '../entities/withdraw.entity';
declare const CreateWithdrawDto_base: import("@nestjs/common").Type<Pick<Withdraw, "shop_id" | "details" | "amount" | "note" | "payment_method">>;
export declare class CreateWithdrawDto extends CreateWithdrawDto_base {
}
export {};
