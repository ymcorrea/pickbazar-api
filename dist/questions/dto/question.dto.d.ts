import { Question } from "../entities/question.entity";
declare const CreateQuestionDto_base: import("@nestjs/common").Type<Omit<Question, "id" | "created_at" | "updated_at" | "user" | "product">>;
export declare class CreateQuestionDto extends CreateQuestionDto_base {
}
declare const UpdateQuestionDto_base: import("@nestjs/common").Type<Partial<CreateQuestionDto>>;
export declare class UpdateQuestionDto extends UpdateQuestionDto_base {
}
export {};
