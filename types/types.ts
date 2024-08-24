import { Database } from "./supabase";

export type User = Database["public"]["Tables"]["user"]["Row"];
export type CodeReview = Database["public"]["Tables"]["code_reviews"]["Row"];
