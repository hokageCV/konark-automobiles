import { z } from "zod";

const envSchema = z.object({
    GOOGLE_SHEET_ID: z.string().nonempty(),
    GOOGLE_SHEET_CLIENT_EMAIL: z.string().nonempty(),
    GOOGLE_SHEET_PRIVATE_KEY: z.string().nonempty(),
});

type Env = z.infer<typeof envSchema>;

export const Env: Env = envSchema.parse(process.env);

export default Env;
