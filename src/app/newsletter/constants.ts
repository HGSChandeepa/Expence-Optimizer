import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email().min(5).max(255),
});
