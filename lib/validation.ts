import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, "Name must be at the most 50 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string(),
  // .refine((phone) => /^[6-9]\d{9}$/.test(phone), "Invalid phone number"),
});
