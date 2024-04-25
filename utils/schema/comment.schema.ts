import { z } from "zod";

export const commentSchema = z.object({
  name: z.string().min(3, { message: "Name is required." }),
  email: z.string().email({ message: "Email is required." }),
  url: z.string().optional(),
  content: z
    .string()
    .min(3, { message: "Content is required." })
    .max(250, { message: "Content is too long." }),
});

export type CommentFormData = z.infer<typeof commentSchema>;
