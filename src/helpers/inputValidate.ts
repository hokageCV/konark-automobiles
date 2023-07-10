import { z } from "zod";

const idSchema = z
    .string()
    .nonempty({ message: "Please Enter ID " })
    .refine((value) => /^si \d{3,5}$/i.test(value), {
        message: "Incorrect ID format ",
    });

export function validateId(id: string): string | undefined {
    const validationResult = idSchema.safeParse(id);
    return validationResult.success ? undefined : validationResult.error.errors[0].message;
}
