import { GetTagsDto, TagPaginator } from "./dto/get-tags.dto";
import { CreateTagDto, UpdateTagDto } from "./dto/tag.dto";
import { TagsService } from "./tags.service";
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): {
        name: string;
        details: string;
        icon: string;
        language: string;
        id: number;
    };
    findAll(query: GetTagsDto): Promise<TagPaginator>;
    findOne(param: string, language: string): import("./entities/tag.entity").Tag;
    update(id: string, updateTagDto: UpdateTagDto): import("./entities/tag.entity").Tag;
    remove(id: string): string;
}
