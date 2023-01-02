import { OmitType, PartialType } from "@nestjs/swagger";
import { Question } from "../entities/question.entity";

export class CreateQuestionDto extends OmitType(Question, [
  "id",
  "product",
  "user",
  "created_at",
  "updated_at",
]) {}

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
