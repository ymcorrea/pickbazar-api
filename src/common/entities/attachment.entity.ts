import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Attachment extends CoreEntity {
  @Column()
  thumbnail?: string;

  @Column()
  original?: string;
}
