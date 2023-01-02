import { AnalyticsService } from "./analytics.service";
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    analytics(): import("./entities/analytics.entity").Analytics;
}
