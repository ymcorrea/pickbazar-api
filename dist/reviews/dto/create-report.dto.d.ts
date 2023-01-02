import { Report } from '../entities/reports.entity';
declare const CreateReportDto_base: import("@nestjs/common").Type<Omit<Report, "user" | "id" | "created_at" | "updated_at">>;
export declare class CreateReportDto extends CreateReportDto_base {
}
export {};
