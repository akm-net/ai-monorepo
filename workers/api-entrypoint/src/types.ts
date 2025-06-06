import { DateTime, Str } from "chanfana";
import { z } from "zod";

export const Task = z.object({
  name: Str({ example: "lorem" }),
  slug: Str(),
  description: Str({ required: false }),
  completed: z.boolean().default(false),
  due_date: DateTime(),
});

export const Embedding = z.array(z.number());

// Extend Hono's ContextVariableMap to include our custom variables
declare module "hono" {
  interface ContextVariableMap {
    consumerName: string;
  }
}
