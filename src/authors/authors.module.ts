import { Module } from "@nestjs/common";
import { AuthorsController, TopAuthors } from "./authors.controller";
import { AuthorsService } from "./authors.service";

@Module({
  controllers: [AuthorsController, TopAuthors],
  providers: [AuthorsService],
})
export class AuthorsModule {}
