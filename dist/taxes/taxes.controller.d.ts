import { GetTaxesDto } from "./dto/get-taxes.dto";
import { CreateTaxDto, UpdateTaxDto } from "./dto/tax.dto";
import { TaxesService } from "./taxes.service";
export declare class TaxesController {
    private readonly taxesService;
    constructor(taxesService: TaxesService);
    create(createTaxDto: CreateTaxDto): import("./entities/tax.entity").Tax;
    findAll(getTaxesDto: GetTaxesDto): import("./entities/tax.entity").Tax[];
    findOne(id: string): import("./entities/tax.entity").Tax;
    update(id: string, updateTaxDto: UpdateTaxDto): import("./entities/tax.entity").Tax;
    remove(id: string): string;
}
