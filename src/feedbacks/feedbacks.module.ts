import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Feedback } from "./entities/feedback.entity";
import { FeedbackController } from "./feedbacks.controller";
import { FeedbackService } from "./feedbacks.service";

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
