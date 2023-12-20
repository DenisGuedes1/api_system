import {z} from"zod";
import { returnSize } from "./schemaSize";


export const createdMenuSchema = z.object({
    name:z.string(),
    options: z.array(z.string()),
    size: z.array(returnSize),
    price: z.number(),
    drinks: z.array(z.string()),
    additional: z.array(z.string()),
    


})
export const returnMenuSchema = createdMenuSchema.extend({
    id:z.string(),
})



// @PrimaryGeneratedColumn("uuid")
// id: string;

// @Column()
// size: string;

// @OneToMany(() => Menu, menu => menu.size)
// menuItems: Menu[];
// }