import { CreateNewSubscriberDto } from "./dto/create-new-subscriber.dto";
import { NewslettersService } from "./newsletters.service";
export declare class NewslettersController {
    private newslettersService;
    constructor(newslettersService: NewslettersService);
    subscribeToNewsletter(body: CreateNewSubscriberDto): Promise<string>;
}
