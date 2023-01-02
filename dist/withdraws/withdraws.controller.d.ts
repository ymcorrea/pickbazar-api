import { WithdrawsService } from './withdraws.service';
import { CreateWithdrawDto } from './dto/create-withdraw.dto';
import { ApproveWithdrawDto } from './dto/approve-withdraw.dto';
import { GetWithdrawsDto, WithdrawPaginator } from './dto/get-withdraw.dto';
export declare class WithdrawsController {
    private readonly withdrawsService;
    constructor(withdrawsService: WithdrawsService);
    createWithdraw(createWithdrawDto: CreateWithdrawDto): {
        amount: number;
        note: string;
        details: string;
        payment_method: string;
        shop_id: number;
        id: number;
    };
    withdraws(query: GetWithdrawsDto): Promise<WithdrawPaginator>;
    withdraw(id: string): string;
    approveWithdraw(id: string, updateWithdrawDto: ApproveWithdrawDto): import("./entities/withdraw.entity").Withdraw;
    deleteWithdraw(id: number): string;
}
