import { GetTagsDto } from "./dto/get-tags.dto";
import { CreateTagDto, UpdateTagDto } from "./dto/tag.dto";
import { Tag } from "./entities/tag.entity";
export declare class TagsService {
    private tags;
    create(createTagDto: CreateTagDto): {
        name: string;
        details: string;
        icon: string;
        language: string;
        id: number;
    };
    findAll({ page, limit, search }: GetTagsDto): {
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
        data: Tag[];
    };
    findOne(param: string, language: string): Tag;
    update(id: number, updateTagDto: UpdateTagDto): Tag;
    remove(id: number): string;
}
