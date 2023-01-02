import { GetQuestionDto } from "./dto/get-questions.dto";
import { CreateQuestionDto, UpdateQuestionDto } from "./dto/question.dto";
import { Question } from "./entities/question.entity";
export declare class QuestionService {
    private question;
    findAllQuestions({ limit, page, search, answer, product_id, }: GetQuestionDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: Question[];
    };
    findQuestion(id: number): Question;
    create(createQuestionDto: CreateQuestionDto): Question;
    update(id: number, updateQuestionDto: UpdateQuestionDto): Question;
    delete(id: number): Question;
}
