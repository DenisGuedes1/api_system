import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
    ManyToOne,
} from "typeorm";
import { Size } from "./size.entites";

@Entity("Menu")
export class Menu {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ type: "text", array: true })
    options: string[];

        
    @ManyToOne(() => Size, size => size.menuItems)
    size: Size;

    @Column({ type: "numeric", precision: 10, scale: 2 })
    price:number;
    
    
    @Column({ type: "text", array: true })
    drinks: string[];

  
    @Column({ type: "text", array: true })
    additional: string[];
  
}