import { Database } from "./supabase";

export type User = Database["public"]["Tables"]["user"]["Row"];
export type PdfDocument = Database["public"]["Tables"]["documents"]["Row"];
