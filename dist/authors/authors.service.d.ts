import { CreateAuthorDto } from "./dto/create-author.dto";
import { GetAuthorDto } from "./dto/get-author.dto";
import { GetTopAuthorsDto } from "./dto/get-top-authors.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Author } from "./entities/author.entity";
export declare class AuthorsService {
    private authors;
    create(createAuthorDto: CreateAuthorDto): Author;
    getAuthors({ page, limit, search }: GetAuthorDto): {
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
        data: Author[];
    };
    getAuthorBySlug(slug: string): Author;
    getTopAuthors({ limit }: GetTopAuthorsDto): Promise<Author[]>;
    update(id: number, updateAuthorDto: UpdateAuthorDto): Author;
    remove(id: number): string;
}
