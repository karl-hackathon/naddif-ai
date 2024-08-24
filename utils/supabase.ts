import { User } from "@/types/types";
import { auth, currentUser } from "@clerk/nextjs/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createServerClientWithCredentials() {
    const cookieStore = cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
            },
        }
    );

    return supabase;
}

export async function getLoggedInUser(): Promise<User> {
    const user = auth();
    const cookieStore = cookies();

    const supabase: any = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
        },
      }
    );
    const { data } = await supabase
        .from("user")
        .select("*")
        .eq("user_id", user?.userId)
        .single();

    return data;
}
