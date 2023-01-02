import { Question } from '../entities/question.entity';
declare const CreateQuestionDto_base: import("@nestjs/common").Type<Omit<Question, "id" | "product" | "user" | "created_at" | "updated_at">>;
export declare class CreateQuestionDto extends CreateQuestionDto_base {
}
export {};
