import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Profile extends CoreEntity {
  // avatar?: Attachment;
  @Column()
  bio?: string;

  // @Column() 
  // socials?: Social[];

  @Column()
  contact?: string;

  @OneToOne((type) => User, (user) => user.profile)
  user: User;
}

// @Entity()
export class Social extends CoreEntity {
  type: string;
  link: string;
}
