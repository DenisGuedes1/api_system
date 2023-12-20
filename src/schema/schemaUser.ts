import { z } from "zod";
import { hashSync } from "bcryptjs";

export const createdUserSchema = z.object({
    name_fantasy: z.string(),
    email: z.string().email(),
    password: z.string().transform((pass) => {
        return hashSync(pass, 10);
    }),
    
    avatar: z.string().default(""),
    isAdmin: z.boolean().default(false),
    state:z.string(),
    district: z.string(),
    reset_token: z.string().nullable().default(null),
});

export const returnCreatedUser = createdUserSchema.extend({

    id: z.string(),
});

export const returnWithPassWord = returnCreatedUser.omit({
    password:true
})

export const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const UpdatedUserSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().transform((pass) => {
            return hashSync(pass, 10);
        }),
        avatar: z.string().default(""),
        reset_token: z.string().nullable(),
    })
    .partial();