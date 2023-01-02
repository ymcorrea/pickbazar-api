import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Feedback extends CoreEntity {
  @Column()
  user_id: string;

  @Column()
  model_type: string;

  @Column()
  model_id: string;

  @Column()
  positive?: boolean;

  @Column()
  negative?: boolean;
}
