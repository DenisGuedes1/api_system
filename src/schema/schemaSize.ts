import { z } from "zod"
import { createdMenuSchema } from "./schemaMenu"

export const sizeSchema = z.object({
    size:z.string(),
    price:z.number(),
    menuItems:z.array(createdMenuSchema)
})  
export const returnSize = sizeSchema.extend({
    id: z.string()
})