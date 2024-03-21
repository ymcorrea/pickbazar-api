import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Tag extends CoreEntity {
  @Column()
  name: string;
  @Column() 
  slug: string;
  @Column()
  parent: number;
  @Column()
  details: string;
  // image: Attachment;
  @Column()
  icon: string;

  // type: Type;
  // products: Product[];
  @Column()
  language: string;
  @Column()
  translated_languages: string[];
}
