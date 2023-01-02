import { Body, Controller, Post } from "@nestjs/common";
import { CreateNewSubscriberDto } from "./dto/create-new-subscriber.dto";
import { NewslettersService } from "./newsletters.service";

@Controller("subscribe-to-newsletter")
export class NewslettersController {
  constructor(private newslettersService: NewslettersService) {}

  @Post()
  async subscribeToNewsletter(@Body() body: CreateNewSubscriberDto) {
    return this.newslettersService.subscribeToNewsletter(body);
  }
}
