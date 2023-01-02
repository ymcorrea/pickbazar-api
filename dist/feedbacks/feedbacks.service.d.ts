import { CreateFeedBackDto, UpdateFeedBackDto } from "./dto/feedback.dto";
export declare class FeedbackService {
    findAllFeedBacks(): string;
    findFeedBack(id: number): string;
    create(createFeedBackDto: CreateFeedBackDto): string;
    update(id: number, updateFeedbackDto: UpdateFeedBackDto): string;
    delete(id: number): string;
}
