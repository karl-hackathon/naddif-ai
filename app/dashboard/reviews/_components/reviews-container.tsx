// "use client"

// import {
//     createServerClientWithCredentials,
//     getLoggedInUser,
// } from "@/utils/supabase";
import EmptyCode from "./empty-code";
import ReviewsTable from "./reviews-table";
// import { cookies } from "next/headers";
// import { createBrowserClient } from "@supabase/ssr";
// import { useUser } from "@clerk/nextjs";
// import { createBrowserClient, createServerClient } from "@supabase/ssr";

export default async function ReviewsContainer() {
    // const { user } = useUser()
    // const user = await getLoggedInUser();
    // const cookieStore = cookies();

    // const supabase: any = createServerClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_KEY!,
    //   {
    //     cookies: {
    //       get(name: string) {
    //         return cookieStore.get(name)?.value;
    //       },
    //     },
    //   }
    // );

    // const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!);

    // const { data: reviews, error } = await supabase
    //     .from("code_reviews")
    //     .select("*")
    //     // .eq("user_id", user?.user_id)
    //     .eq("user_id", user?.id)
    //     .order("id", { ascending: false });

    return (
        <div className="flex flex-col gap-2 lg:gap-2 min-h-[90vh] w-full">
            {/* {reviews && reviews.length > 0 ? (
                <ReviewsTable reviews={reviews} />
            ) : (
                <EmptyCode error={error} />
            )} */}
            <ReviewsTable />
        </div>
    );
}
