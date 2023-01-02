import { AuthorsService } from "./authors.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { AuthorPaginator, GetAuthorDto } from "./dto/get-author.dto";
import { GetTopAuthorsDto } from "./dto/get-top-authors.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Author } from "./entities/author.entity";
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    createAuthor(createAuthorDto: CreateAuthorDto): Author;
    getAuthors(query: GetAuthorDto): Promise<AuthorPaginator>;
    getAuthorBySlug(slug: string): Promise<Author>;
    update(id: string, updateAuthorDto: UpdateAuthorDto): Author;
    remove(id: string): string;
}
export declare class TopAuthors {
    private authorsService;
    constructor(authorsService: AuthorsService);
    getTopAuthors(query: GetTopAuthorsDto): Promise<Author[]>;
}
