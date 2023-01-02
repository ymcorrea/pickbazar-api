import { Withdraw } from '../entities/withdraw.entity';
declare const CreateWithdrawDto_base: import("@nestjs/common").Type<Pick<Withdraw, "amount" | "note" | "details" | "payment_method" | "shop_id">>;
export declare class CreateWithdrawDto extends CreateWithdrawDto_base {
}
export {};
