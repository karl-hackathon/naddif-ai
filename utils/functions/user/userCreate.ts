import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { userCreateProps } from "@/utils/types";

export const userCreate = async ({
    email,
    first_name,
    last_name,
    profile_image_url,
    user_id,
}: userCreateProps) => {
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

    try {
        const { data, error } = await supabase
            .from("user")
            .insert([
                {
                    email,
                    first_name,
                    last_name,
                    profile_image_url,
                    user_id,
                    credits: 0,
                },
            ])
            .select();
        if (error?.code) return error;
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
