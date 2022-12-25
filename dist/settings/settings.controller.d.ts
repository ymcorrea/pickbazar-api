import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    create(createSettingDto: CreateSettingDto): import("./entities/setting.entity").Setting;
    findAll(): import("./entities/setting.entity").Setting;
}
