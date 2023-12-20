import {z} from"zod";
import { returnSize } from "./schemaSize";


export const createdMenuSchema = z.object({
    name:z.string(),
    options: z.array(z.string()),
    size: z.string().optional(),
    price: z.number(),
    drinks: z.array(z.string()),
    additional: z.array(z.string()),
    


})
export const returnMenuSchema = createdMenuSchema.extend({
    id:z.string(),
})

