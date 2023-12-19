import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";
@Entity("Users")
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name_fantasy: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    avatar: string;

    @Column()
    isAdmin: Boolean;

    @Column({
        type: "text",
        nullable: true,
    })
    reset_token: string | null;
  
}