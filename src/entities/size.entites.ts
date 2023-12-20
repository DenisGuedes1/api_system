import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Menu } from "./menu.entities";

@Entity("Size")
export class Size {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  size: string;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  price:number;

  @OneToMany(() => Menu, menu => menu.size)
  menuItems: Menu[];
}