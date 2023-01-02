import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Tax extends CoreEntity {
  @Column()
  name: string;
  @Column()
  rate: number;
  @Column()
  is_global: boolean;
  @Column()
  country?: string;
  @Column()
  state?: string;
  @Column()
  zip?: string;
  @Column()
  city?: string;
  @Column()
  priority?: number;
  @Column()
  on_shipping: boolean;
}
